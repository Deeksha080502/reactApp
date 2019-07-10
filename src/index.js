import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import ProductDetail from "./components/productdetail";
import CartProducts from './components/carts_products';
import reducer from './reducers' ;
import { createStore } from 'redux'  ;
import { Provider } from 'react-redux' ;   

const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension():undefined)

//<App /> 
ReactDOM.render( 
    <Provider store={store}>
     <Router>
    <Route path= "/detail" component={ProductDetail}/>
    <Route path= "/products" component={CartProducts}/>
    <Route exact  path="/" component={App} />  
</Router>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
