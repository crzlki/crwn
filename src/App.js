import React from 'react';
import HomePage from './components/pages/homepage/homepage.jsx'
import Shop from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import './App.css';
import {
  
 Switch,
  Route,
  Link
  // useRouteMatch,
  // useParams
} from "react-router-dom";

const Home = props => {
  console.log(props)
  return (
    <div>
     
      <Link to= '/topics'>
      </Link>
      
      <h1>Home</h1>
    </div>
    
  )
}




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path='/'  component={HomePage}/>
      {/* <Route  path='/topics'  component={Home}/> */}
      <Route  path='/shop'  component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
