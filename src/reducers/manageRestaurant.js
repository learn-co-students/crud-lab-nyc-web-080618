
import cuid from 'cuid';
export const cuidFn = cuid;

const defaultState = {
  restaurants: [],
  reviews: []
}

export default function manageRestaurants(state = defaultState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {text: action.text, id: action.id}
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews.filter(review => review.restaurantId !== action.id)}
    case "ADD_REVIEW":
    const review = {text: action.text, restaurantId: action.restaurantId, id: action.id}
      return {...state, reviews: [...state.reviews, review]}
    case "DELETE_REVIEW":
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
      return state
  }
}
