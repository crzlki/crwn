import { createSelector } from 'reselect'



const selectShop = state=> state.shop

export  const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key=>collections[key]) //convert it to array
)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam] //dynamically get params
)