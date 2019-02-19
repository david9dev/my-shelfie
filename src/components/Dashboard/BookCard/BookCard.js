import React, {Component} from 'react';
import './BookCard.css';

class BookCard extends Component
{
    render()
    {
        return(
            <div className='book_card'>
                <div className='image'>
                    image
                </div>
                <div className='info'>
                    info of book
                </div>
                <div className='price'>
                    price
                </div>
            </div>
        )
    }

}

export default BookCard;