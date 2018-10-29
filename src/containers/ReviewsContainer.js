import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from "react-redux"


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview(text, restaurantId, id){
      const action = {
        type: "ADD_REVIEW",
        text,
        restaurantId,
        id
      }
      dispatch(action)
    },
    deleteReview(id) {
      const action = {
        type: "DELETE_REVIEW",
        id
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
