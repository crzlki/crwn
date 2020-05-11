import  ShopActionTypes  from './shop.types'
import { convertCollectionsSnapshotToMap,firestore} from '../../firebase/firebase.ultils'


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
    
})
export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionStartAysnc = () => {
  return dispatch=>{
    
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())

    collectionRef
    .get()
    .then(snapshot=>{    
        const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) 
        dispatch(fetchCollectionSuccess(collectionsMap))   
        })
        .catch(err=>{
            fetchCollectionFailure(err)
        })
  }  
}
export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

