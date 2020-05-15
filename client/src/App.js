import React,{ Suspense,lazy } from 'react';
import { GlobalStyle } from './global.styles'
// import HomePage from './components/pages/homepage/homepage.jsx'
import Header from './components/header/header.component'
// import {auth, createUserProfileDocument } from './firebase/firebase.ultils'
// import { selectCollectionsForPreview } from './redux/shop/shop.selector'
import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { useEffect } from 'react'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundray.component'
import {
  
 Switch,
  Route,
  Redirect
  // useRouteMatch,
  // useParams
} from "react-router-dom";

const HomePage = lazy(()=>import('./components/pages/homepage/homepage.jsx'))
const Shop = lazy(()=> import('./components/pages/shop/shop.component.jsx'))
const SignInAndSignUpPage = lazy(()=>import('./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const Checkout = lazy(()=>import('./components/pages/checkout/checkout.component'))
const Contact = lazy(()=>import('./components/pages/contact/contact.component'))

const App = ({checkUserSession,currentUser})=> {
     

useEffect(()=>{
  checkUserSession()
},[checkUserSession])// cuz this is a prop passed in this component
  
   
    return (
      <div className="App">
        <Suspense fallback={<Spinner/>}>
        <GlobalStyle />
        <Header ></Header>
        <Switch>
          <ErrorBoundary>           
        <Route exact path='/'  component={HomePage}/>
        {/* <Route  path='/topics'  component={Home}/> */}
        <Route  path='/shop'  component={Shop}/>
        <Route path='/contact' component={Contact} />
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
          </ErrorBoundary>
        </Switch>
        </Suspense>
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
