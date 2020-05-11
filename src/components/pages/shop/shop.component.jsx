import React from 'react'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../collections-overview/collections.overview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../../redux/shop/shop.selector'
import { fetchCollectionStartAysnc } from '../../../redux/shop/shop.actions'
import { Route } from 'react-router-dom'
// import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.ultils'
import WithSpinner from '../../with-spinner/with-spinner.component'


import './shop.component.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
//     state = {
//         loading: true
//     }
//    unsubscribeFromSnapshot = null
  // render trigger first
   componentDidMount(){
    const {  fetchCollectionStartAysnc } = this.props
    // 这一个方法 把方法移步到redux里储存 包括loading 改名为isFetching  通过thunk实现
    fetchCollectionStartAysnc()
    
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

   }

    render(){
        const { match,isFetching,isCollectionsLoaded } = this.props
        // const { loading } = this.state
        return <div className="shop-page">

        <Route exact path ={`${match.path}`} render={
            (props)=><CollectionsOverviewWithSpinner isLoading = {isFetching} {...props} />}></Route>
        <Route  path ={`${match.path}/:collectionId`} render={
            (props)=><CollectionPageWithSpinner isLoading = {!isCollectionsLoaded} {...props} />}></Route>
               
            </div>
    }
    
}
const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAysnc: ()=> dispatch(fetchCollectionStartAysnc())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)