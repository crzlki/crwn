// const { setCurrentUser } = this.props
//    this.unsubscribe =  auth.onAuthStateChanged(async userAuth=>{ 
//      // whenever new user status change ,can handle both login and logout
//      // the function we passed in is observer
//      // the async stream is keep working listening to the coming events
//      if(userAuth){
//        const userRef = await createUserProfileDocument(userAuth)
//        userRef.onSnapshot(snapShot=>{
//          setCurrentUser({        
//              id:snapShot.id,
//              ...snapShot.data()     
//          },()=>{
//           console.log(this.state)
//          })
//        })
//        return
//      }  
//      setCurrentUser(null)
//      addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))
//     }, error =>console.log(error))


// componentWillUnmount(){
//   // firestore method offers us to stop the async stream
//   this.unsubscribe()
// }