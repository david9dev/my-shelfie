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
    handleStoreLibrary(event)
    {
        const {pathname} = this.props.location
        const direction = (pathname === '/dashboard/store' || pathname.includes('/book'))
        ? 'library' : 'store';
        this.props.history.push(`/dashboard/${direction}`)
    }
    render()
    {
        
        const {pathname} =this.props.location;
        return(
            <header>
              <div className='tot'>
              <img className='logo' src={logo} alt='shelfie'/>
              MY SHELFIE
              </div>
              {
                  (pathname === '/' || pathname === '/register')
                ? null
                : <div className='buttons'>
                   <button
                   onClick={(event)=> this.handleStoreLibrary(event)}>
                   {(pathname === '/dashboard/store' || pathname.includes('/book'))
                   ? 'library' : 'store'}
                   </button>
                   <Link to='/'><button>logout</button></Link>
                   <Link to='/cart'><button>cart</button></Link>
                  </div>
              }
            </header>
        )
    }
}


export default withRouter(connect()(Header));