import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Book from './components/Dashboard/Book/Book';
import Cart from './components/Cart/Cart'
function Routes()
{
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/book/:title/:id' component={Book}/>
            </Switch>
        </div>
    )
}

export default Routes;