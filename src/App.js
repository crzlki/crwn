import React from 'react';
import HomePage from './components/pages/homepage/homepage.jsx'
import Shop from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Checkout from './components/pages/checkout/checkout.component'
// import {auth, createUserProfileDocument } from './firebase/firebase.ultils'
// import { selectCollectionsForPreview } from './redux/shop/shop.selector'
import { connect } from 'react-redux'
 import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { useEffect } from 'react'

import './App.css';
import {
  
 Switch,
  Route,
  Redirect
  // useRouteMatch,
  // useParams
} from "react-router-dom";




const App = ({checkUserSession,currentUser})=> {
     

useEffect(()=>{
  checkUserSession()
},[checkUserSession])// cuz this is a prop passed in this component
  
   
    return (
      <div className="App">
        <Header ></Header>
        <Switch>
        <Route exact path='/'  component={HomePage}/>
        {/* <Route  path='/topics'  component={Home}/> */}
        <Route  path='/shop'  component={Shop}/>
        <Route  exact path='/checkout'  component={Checkout}/>
        <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />     
        </Switch>
      </div>
    )
  
 
}


const mapStateToprops = createStructuredSelector({
 currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: ()=>dispatch(checkUserSession())
})
export default connect(mapStateToprops,mapDispatchToProps)(App);
