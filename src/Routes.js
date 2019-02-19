import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
function Routes()
{
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        </div>
    )
}

export default Routes;