import React from 'react'

import CollectionOverviewContainer from '../../collections-overview/collection-overview.container'
import CollectionPageContainer from '../../pages/collection/collection.container'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../../redux/shop/shop.actions'
import { Route } from 'react-router-dom'
import { useEffect } from 'react'


import './shop.component.scss'



const ShopPage =({fetchCollectionsStart,match})=> {

  // render trigger first
  useEffect(()=>{
// 第一次改造 把方法移步到redux里储存 包括loading 改名为isFetching  通过thunk实现
// 二次改造 通过saga监听 fetchCollectionsStart 方法 执行saga里的异步方法
fetchCollectionsStart()
   },[fetchCollectionsStart])

    return <div className="shop-page">
        {/* <Route exact path ={`${match.path}`} render={
            (props)=><CollectionsOverviewWithSpinner isLoading = {isFetching} {...props} />}></Route> */}
        <Route exact path ={`${match.path}`} component={CollectionOverviewContainer} />
        <Route  path ={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
  </div>
    
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage)