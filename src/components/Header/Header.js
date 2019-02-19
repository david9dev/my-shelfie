import React, {Component} from 'react';
import logo from './shelfie_icon.png';
import {withRouter} from 'react-router-dom';
import './Header.css';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        const {path} =this.props.match;
        this.state = {
            isLoginOrRegister: (path === '/' || path === '/register')
        }
        console.log(this.props)

    }
    render()
    {
        return(
            <header>
              <div className='tot'>
              <img src={logo} alt='shelfie'/>
              MY SHELFIE
              </div>
              {
                  this.state.isLoginOrRegister
                ? null
                : <div className='buttons'>
                   <button>username</button>
                   <button>logout</button>
                   <button>cart</button>
                  </div>
              }
            </header>
        )
    }
}

export default withRouter(Header);