import React, {Component} from 'react';
import logo from './shelfie_icon.png';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Header.css';

class Header extends Component
{
    // constructor(props)
    // {
    //     super(props);
    //     const {pathname} =this.props.location;
    //     this.state = {
    //         isLoginOrRegister: (pathname === '/' || pathname === '/register')
    //     }

    // }
    render()
    {
        
        const {pathname} =this.props.location;
        return(
            <header>
              <div className='tot'>
              <img src={logo} alt='shelfie'/>
              MY SHELFIE
              </div>
              {
                  (pathname === '/' || pathname === '/register')
                ? null
                : <div className='buttons'>
                   <button>username</button>
                   <Link to='/'><button>logout</button></Link>
                   <button>cart</button>
                  </div>
              }
            </header>
        )
    }
}


export default withRouter(connect()(Header));