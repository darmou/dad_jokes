import {
  RATE_JOKE,
  RECEIVE_JOKE,
  REQUEST_JOKE
} from "../actions";


import { RatingButtonTypes } from '../lib/enums';


const joke = (state = null, action) => {
  switch (action.type) {

    case RATE_JOKE:
      let rating = state.rating;

      rating = (action.ratingType === RatingButtonTypes.FUNNY) ? 'funny': 'not funny';
      const joke = {...state, rating: rating};
      return joke;

    case REQUEST_JOKE:
      return {...state, isFetching: true };

    case RECEIVE_JOKE:
      return {...state,
        isFetching: false,
        id: action.joke.id,
        text: action.joke.joke || action.joke.text,
        rating: action.joke.rating || '',
        lastUpdated: action.receivedAt
      };

    default:
      return state
  }
}

export default joke;
