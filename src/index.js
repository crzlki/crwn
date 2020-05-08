import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
   BrowserRouter as Router
 // Switch,
 // Route
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store = {store}>
    <Router>
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
