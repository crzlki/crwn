import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionsLoaded } from "../../../redux/shop/shop.selector"
import WithSpinner from '../../with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    // pass function
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    // compose mutiply curred funtions
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export  default CollectionPageContainer

// 用一个容器把 state 传递到这个容器中 不用在shoppage里写一大堆处理 isolated 