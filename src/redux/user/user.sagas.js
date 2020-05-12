import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.ultils'
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess,
} from './user.actions'

export function* getSnapshot(userAuth,additionalData) {
try{
    const userRef = yield call(createUserProfileDocument, userAuth,additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({
        // set the current user state
        id: userSnapshot.id,
        ...userSnapshot.data()
    }))
    }catch(err){
        yield put(signInFailure(err))
    }
}
export function* signInWithGoogle() {
    try {
        const {
            user
        } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshot(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}
export function* signInWithEmail({
    payload: {
        email,
        password
    }
}) {
    try {
        console.log(email,password)
        const {
            user
        } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshot(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}
export function* isUserAuthenticated(){
 try{
   const userAuth = yield getCurrentUser()
   console.log(userAuth)
   if(!userAuth) return 
   yield getSnapshot(userAuth)
    } catch(err){
    yield put(signInFailure(err))
 }
}
export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    }catch(err){
        yield put(signOutFailure(err))
    }
}
export function* signUp({
payload: {
    displayName,
    email,
    password
}}){
    try{
        console.log(displayName,
            email,
            password)
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password)
            console.log(user)
    //   yield createUserProfileDocument(user,{displayName})
      yield put(signUpSuccess({
        user,
        additionalData: {displayName},
    }))
      }catch(err){
          put(signUpFailure(err))
      }
}
export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshot(user,additionalData)
}
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}
export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}
export function* onSignUpStart(){
    // listening to action SIGN_UP_START waiting for trigger signUp
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}
export function* onSignUpSuccess(){
    // sign in after sign up listener
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}
export function* userSagas() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(isUserAuthenticated),call(onSignOut),call(onSignUpStart),call(onSignUpSuccess)])
}