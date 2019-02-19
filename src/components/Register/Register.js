import React, {Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from './../../ducks/reducer';
import {Link} from 'react-router-dom';
class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            match: ""
        };
    }

    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleLogin()
    {
        // axios.post('/api/login',this.state).then((response) =>
        // {
        //     console.log(response.data);
        //     const {
        //         first_name: firstname,
        //         last_name: lastname,
        //         email,
        //         user_id: id
        //     } = response.data;

        //     this.props.setUser({
        //         firstname,
        //         lastname,
        //         email,
        //         id
        //     });
        // }).then(() =>
        // {
        //     this.props.history.push('/dashboard');
        // }).catch((error) =>
        // {
        //     console.log(error);
        //     alert('username or password is incorrect');
        // })
    }
    render()
    {
        return(
            <div className='login_container'>
                <div className='login'>
                <div className='inputs'>
                <input className='firstname' type='password' placeholder='first name' name='firstname'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                    <input className='lastname' type='password' placeholder='last name' name='lastname'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                    <input className='email' placeholder='email' name='email' type='email'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                    <input className='password' type='password' placeholder='password' name='password'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                    <input className='match' type='password' placeholder='match-password' name='match'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                </div>
                <div className='submit'>
                <Link to='/'><button>cancel</button></Link>
                    <button
                    onClick={() => this.handleLogin()}>register</button>
                </div>
                </div>
                <footer>
                </footer>
            </div>
        )
    }
}
const mapDispatchToProps = {
    setUser
}
export default connect(null, mapDispatchToProps)(Register);