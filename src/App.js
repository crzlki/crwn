import React from 'react';
import HomePage from './components/pages/homepage/homepage.jsx'
import Shop from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignIn from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.ultils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';
import {
  
 Switch,
  Route
  // useRouteMatch,
  // useParams
} from "react-router-dom";




class App  extends React.Component {
  
    

  unsubscribe = null

  componentDidMount(){
    const { setCurrentUser } = this.props
   this.unsubscribe =  auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth)
       userRef.onSnapshot(snapShot=>{
         setCurrentUser({
           
             id:snapShot.id,
             ...snapShot.data()
           
         },()=>{
          console.log(this.state)
         })
       })
       return
     }  
     setCurrentUser({currentUser:userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    return (
      <div className="App">
        <Header ></Header>
        <Switch>
        <Route exact path='/'  component={HomePage}/>
        {/* <Route  path='/topics'  component={Home}/> */}
        <Route  path='/shop'  component={Shop}/>
        <Route  path='/signin'  component={SignIn}/>
        </Switch>
      </div>
    );
  }
 
}
const mapDispatchToProps = dispatch =>({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
