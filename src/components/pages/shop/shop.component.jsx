import React from 'react'

import CollectionOverviewContainer from '../../collections-overview/collection-overview.container'
import CollectionPageContainer from '../../pages/collection/collection.container'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../../redux/shop/shop.actions'
import { Route } from 'react-router-dom'



import './shop.component.scss'




class ShopPage extends React.Component {

  // render trigger first
   componentDidMount(){
    const {  fetchCollectionsStart } = this.props
    // 这一个方法 把方法移步到redux里储存 包括loading 改名为isFetching  通过thunk实现
    fetchCollectionsStart()
   
   }

    render(){
        const { match } = this.props
        return <div className="shop-page">
        {/* <Route exact path ={`${match.path}`} render={
            (props)=><CollectionsOverviewWithSpinner isLoading = {isFetching} {...props} />}></Route> */}
        <Route exact path ={`${match.path}`} component={CollectionOverviewContainer} />
        <Route  path ={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
               
            </div>
    }
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage)