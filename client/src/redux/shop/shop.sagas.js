import { takeLatest, call, put,all } from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap,firestore} from '../../firebase/firebase.ultils'
import { fetchCollectionSuccess, fetchCollectionFailure} from './shop.actions'
import ShopActionTypes from './shop.types'
// Redux Saga真正的威力，在于其提供了一系列帮助方法，使得对于各类事件可以进行更细粒度的控制，从而完成更加复杂的操作。


export function* fetchCollectionsAsync() {
    yield console.log('triggered')
    try{
    const collectionRef = firestore.collection('collections')  
    const snapshot =  yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot)
    yield put(fetchCollectionSuccess(collectionsMap))
}catch(err){
    yield put(fetchCollectionFailure(err))
}
    
    // collectionRef
    // .get()
    // .then(snapshot=>{    
    //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) 
    //     dispatch(fetchCollectionSuccess(collectionsMap))   
    //     })
    //     .catch(err=>{
    //         fetchCollectionFailure(err)
    //     })
    
}
export function* fetchCollectionsStart(){
    // create a none-blocking call
    // takeLatest will only fire the latest fetch request
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}