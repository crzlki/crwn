import React from 'react'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../collections-overview/collections.overview.component'
import { connect } from 'react-redux'
import { updateCollections } from '../../../redux/shop/shop.actions'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.ultils'

import './shop.component.scss'

class  ShopPage extends React.Component {
    
   unsubscribeFromSnapshot = null

   componentDidMount(){
    const {  updateCollections } = this.props
       const collectionRef = firestore.collection('collections') // get location
       collectionRef.onSnapshot(async snapshot=>{ // everytime assess to the collections collection
       const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
       }) 
   }
    
    render(){
        const { match } = this.props
        return <div className="shop-page">

        <Route exact path ={`${match.path}`} component={CollectionsOverview}></Route>
        <Route  path ={`${match.path}/:collectionId`} component={CollectionPage}></Route>
               
            </div>
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)