import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// a query is a request we make to firestore to give us somthing from the database
//firestore returns is two tpes of objects: references and snapshots.Of these objects,they can either be document or collection versions
// fireStore is an observable event stream

const config = {
    apiKey: "AIzaSyD6nHAvQ6gisbONIsZi6VCEcKomgOFd0jw",
    authDomain: "shop-db-10c35.firebaseapp.com",
    databaseURL: "https://shop-db-10c35.firebaseio.com",
    projectId: "shop-db-10c35",
    storageBucket: "shop-db-10c35.appspot.com",
    messagingSenderId: "212957764043",
    appId: "1:212957764043:web:f453b4d0e791501241fe4e",
    measurementId: "G-0P1S5D3BHG"
  };
  firebase.initializeApp(config)
 // this method is for signup
export const createUserProfileDocument = async (userAuth,additionalData)=>{
 
if(!userAuth) return
const userRef = firestore.doc(`users/${userAuth.uid}`)//get location


const snapShot = await userRef.get() // get object contains data

// console.log(collectionSnapshot,{collection: collectionSnapshot.docs.map(doc=>doc.data())})

if(!snapShot.exists){ // check if the user is in that place
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }catch (err){
       console.log('err creating user',err.message)
    }
}
return userRef
}
 // this method is used to add colelction to firestore
export const addCollectionAndDocuments = async (key, object) => {
 
  const collectionRef = firestore.collection(key)
  
  const batch = firestore.batch() // use batch in case of unpredicted failure
  object.forEach(obj=>{
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,obj)
  })
  return await batch.commit()
}
 //convert 2 steps
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    // convert data from firestore
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
    // convert arry to object
 return  transformedCollection.reduce((acc,collection)=>{
    acc[collection.title.toLowerCase()] = collection
    return acc
  },{})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'}) 
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

export default firebase
