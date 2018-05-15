import {
  ADD_JOKE,
  UPDATE_JOKE,
} from '../actions/index';
import update from 'react-addons-update';

//TODO add RATE_JOKE
const jokes = (state = [], action) => {
  switch (action.type) {
    case ADD_JOKE:
      return [
          ...state,
          {
            id: action.id,
            text: action.text,
            rating: action.rating
          }
        ];
    case UPDATE_JOKE:
        return update(state, {
          $splice: [[action.index, 1, action.joke]]
        });
    default:
      return state
  }
}

export default jokes
