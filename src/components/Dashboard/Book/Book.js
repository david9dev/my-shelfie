import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './Book.css';

class Book extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      page: "",
      bookmark: 0
      
    }
  }
  componentDidMount()
  {
    const {id} = this.props.match.params
    axios.get(`/api/book/content/${id}`).then((response) =>
    {
      // console.log(response.data)
      this.setState({
        page: response.data.data,
        bookmark: response.data.bookmark
      })
    })
  }
  handleTurnPage(value)
  {
    const {id} = this.props.match.params
    axios.patch('/api/bookmark', {id: id, mark: value}).then(() =>
    {
      axios.get(`/api/book/content/${id}`).then((response) =>
      {
        this.setState({
          page: response.data.data,
          bookmark: response.data.bookmark
        })
      })
    })
  }
  render() {
    const {title} = this.props.match.params
    return (
      <div className="book">
      <h2>{title}</h2>
        <div className="page">
        <button 
        onClick={() => this.handleTurnPage(this.state.bookmark - 1000)}>
        {"<"}</button>

        <p className='words'>
        {this.state.page}
        </p>

        <button
        onClick={() => this.handleTurnPage(this.state.bookmark + 1000)}>
        ></button>
        </div>
      </div>
    );
  }
}

export default Book;