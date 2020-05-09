import React from 'react'

import { connect } from 'react-redux'
import  { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import  CollectionPreview  from '../collection-preview/collection-preview'


import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    // overview pass collections to preview
    // think about the tradeoffs ,where does the data/state live and flow?
    <div className="collections-overview">
               {
                    collections.map(({id,...collectionProps})=>(
                    <CollectionPreview key={id} {...collectionProps}> </CollectionPreview>
                    ))
                }
             
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default  connect(mapStateToProps)(CollectionsOverview)