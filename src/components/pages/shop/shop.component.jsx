import React from 'react'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../collections-overview/collections.overview.component'
import { Route } from 'react-router-dom'

import './shop.component.scss'

const  ShopPage = ({ match,location,history }) => {
    console.log(match)
    return <div className="shop-page">

        <Route exact path ={`${match.path}`} component={CollectionsOverview}></Route>
        <Route  path ={`${match.path}/:collectionId`} component={CollectionPage}></Route>
               
            </div>
}


export default  ShopPage