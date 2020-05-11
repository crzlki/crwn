// store extra code

// for shop class two diff pattern to fetch data and bind to reducer

//     state = {
//         loading: true
//     }
//    unsubscribeFromSnapshot = null

 //    const collectionRef = firestore.collection('collections') // get location
       //#### observer pattern
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{ 
    //     // everytime assess to the collections collection
    //    const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) // get correct format
    //     updateCollections(collectionsMap) // set redux state of collections
    //     this.setState({
    //         loading: false
    //     })
    //    }) 
    // ##### promise pattern
    // we can use fetch send request to the certain url get data but the build-in api is prefered
//     collectionRef.get().then(snapshot=>{    
//            const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) 
//             updateCollections(collectionsMap) 
//             this.setState({
//                 loading: false
//             })
//            })
//    }
//    componentWillUnmount(){
//     this.unsubscribeFromSnapshot()

// import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.ultils'
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

// const mapStateToProps = createStructuredSelector({
//     isFetching: selectIsCollectionFetching,
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })