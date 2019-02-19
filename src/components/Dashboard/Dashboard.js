import React, {Component} from 'react';
import axios from 'axios';
import {setUser} from './../../ducks/reducer';
import {connect} from 'react-redux';
import './Dashboard.css';
import BookCard from './BookCard/BookCard';

class Dashboard extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {};

    }
    componentDidMount()
    {
        if(this.props.id===0)
        {
            axios.get('/api/session').then((response) =>
            {
                this.props.setUser(response.data);
            }).then(() =>
            {
                // console.log(this.props.id);            
                if(this.props.id === 0)
                {
                    this.props.history.push('/')
                }
            })
        }
    }
    render()
    {
        const {firstname, lastname} = this.props;
        return(
            <div className='dashboard'>
                <div className='catalog'>
                    this is the the catalog div
                </div>
                <div className='book_card_container'>
                this is the book card container
                Welcome {`${firstname} ${lastname}`}
                <div className='search_bar'>
                    <input placeholder='search'/>
                </div>
                <BookCard/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(duxState)
{
    const {id, firstname, lastname} = duxState;
    return{
        id,
        firstname,
        lastname
    }
}

const mapDispatchToProps = {
    setUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);