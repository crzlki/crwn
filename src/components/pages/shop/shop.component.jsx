import React from 'react'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../collections-overview/collections.overview.component'
import { connect } from 'react-redux'
import { updateCollections } from '../../../redux/shop/shop.actions'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.ultils'
import WithSpinner from '../../with-spinner/with-spinner.component'

import './shop.component.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }
   unsubscribeFromSnapshot = null

   componentDidMount(){
    const {  updateCollections } = this.props
       const collectionRef = firestore.collection('collections') // get location
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{ 
    //     // everytime assess to the collections collection
    //    const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) // get correct format
    //     updateCollections(collectionsMap) // set redux state of collections
    //     this.setState({
    //         loading: false
    //     })
    //    }) 
    // we can use fetch send request to the certain url get data but the build-in api is prefered
    collectionRef.get().then(snapshot=>{    
           const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) 
            updateCollections(collectionsMap) 
            this.setState({
                loading: false
            })
           })
   }
//    componentWillUnmount(){
//     this.unsubscribeFromSnapshot()
//    }

    render(){
        const { match } = this.props
        const { loading } = this.state
        return <div className="shop-page">

        <Route exact path ={`${match.path}`} render={
            (props)=><CollectionsOverviewWithSpinner isLoading = {loading} {...props} />}></Route>
        <Route  path ={`${match.path}/:collectionId`} render={
            (props)=><CollectionPageWithSpinner isLoading = {loading} {...props} />}></Route>
               
            </div>
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)