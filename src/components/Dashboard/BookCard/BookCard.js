import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
// import axios from 'axios'; 
import './BookCard.css';

class BookCard extends Component
{
    handleClick()
    {
        const {book_id: id, title} = this.props.book
        this.props.history.push(`/book/${title}/${id}`);
    }
    render()
    {
        // console.log(this.props)
        const {cover_img_url: image, title, price, description, genre} = this.props.book
        return(
            <div className='book_card'>
                <div className='image_continer'
                onClick={() => this.handleClick()}>
                    <img className='image' src={image} alt='book'/>
                </div>
                <div className='info'
                // onClick={() => this.handleClick()}
                >
                    <h2>{title}</h2>
                    <h4>genre: {genre}</h4>
                    <p>descrption: {description}</p>
                </div>
                <div className='price'>
                    price: {price}
                </div>
            </div>
        )
    }

}

export default withRouter(BookCard);