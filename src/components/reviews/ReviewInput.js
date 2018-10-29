import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = e => this.setState({text: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurant.id, cuid())
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add review</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default ReviewInput;
