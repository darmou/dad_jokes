import { combineReducers } from 'redux';
import jokes from './jokes';
import joke from './joke';

export default combineReducers({
  jokes: jokes, joke: joke
})
