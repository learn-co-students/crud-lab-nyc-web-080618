import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => this.setState({text: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text, cuid())
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add restaurants</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default RestaurantInput;
