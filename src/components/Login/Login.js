import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from './../../ducks/reducer';
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        axios.post('/api/login',this.state).then((response) =>
        {
            console.log(response.data);
            const {
                first_name: firstname,
                last_name: lastname,
                email,
                user_id: id
            } = response.data;

            this.props.setUser({
                firstname,
                lastname,
                email,
                id
            });
        }).then(() =>
        {
            this.props.history.push('/dashboard');
        }).catch((error) =>
        {
            console.log(error);
            alert('username or password is incorrect');
        })
    }
    render()
    {
        return(
            <div className='login_container'>
                <div className='login'>
                <div className='inputs'>
                    <input className='email' placeholder='username' name='email' type='email'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                    <input className='password' type='password' placeholder='password' name='password'
                    onChange={(event) => this.handleInputChange(event)}
                    />
                </div>
                <div className='submit'>
                    <button>register</button>
                    <button
                    onClick={() => this.handleLogin()}>login</button>
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
export default connect(null, mapDispatchToProps)(Login);