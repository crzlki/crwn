import  ShopActionTypes  from './shop.types'
import { convertCollectionsSnapshotToMap,firestore} from '../../firebase/firebase.ultils'

// ## this is backup file

// Redux Saga真正的威力，在于其提供了一系列帮助方法，使得对于各类事件可以进行更细粒度的控制，从而完成更加复杂的操作。thunk 插件还是需要你自己来写promise来保证各种异步和异常

//假设例如我们要添加以下要求：

// 处理LOGOUT用户操作
// 在第一次成功登录时，服务器返回token，该token在expires_in字段中存储的一些后到期。我们必须在每隔expires_in毫秒时间后的重新向后台刷新授权
// 考虑到在等待api调用的结果(初始登录或刷新)时，用户可以在其间注销
// 你将如何实现这一点与thunk？同时还为整个流程提供全面的测试覆盖？

// put 用于创建 dispatch Effect。
// takeEvery(pattern, saga, ...args)在发起（dispatch）到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga。 take()和while loop 就是takeEvery   takeLatest() delay() 可以实现防抖节流
// call 用于创建 Effect。发起异步或者同步操作
// select 用于创建一个 Effect, 返回当前 Store state 上的一部分数据
// fork 创建一个 Effect，用来命令 middleware 以 非阻塞调用 的形式执行 fn
// cacel 创建一个 Effect，用来命令 middleware 取消之前的一个分叉任务-之前 fork 指令返回的 Task 对象

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
    
})
export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionStartAysnc = () => {
  return dispatch=>{
    
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
    .get()
    .then(snapshot=>{    
        const collectionsMap =  convertCollectionsSnapshotToMap(snapshot) 
        dispatch(fetchCollectionSuccess(collectionsMap))   
        })
        .catch(err=>{
            fetchCollectionFailure(err)
        })
  }  
}
export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

