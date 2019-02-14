import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios';
import './App.css';

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
    axios.get(`/api/book/content/1`).then((response) =>
    {
      this.setState({
        page: response.data.data,
        bookmark: response.data.bookmark
      })
    })
  }
  handleTurnPage(value)
  {
    axios.patch('/api/bookmark', {id: 1, mark: value}).then(() =>
    {
      axios.get(`/api/book/content/1`).then((response) =>
      {
        this.setState({
          page: response.data.data,
          bookmark: response.data.bookmark
        })
      })
    })
  }
  render() {
    return (
      <div className="Book">
        <p>{this.state.page}</p>
        <button 
        onClick={() => this.handleTurnPage(this.state.bookmark - 1000)}>
        previous page</button>
        <button
        onClick={() => this.handleTurnPage(this.state.bookmark + 1000)}>
        next page</button>
      </div>
    );
  }
}

export default Book;