import * as actions from './index'
import { RatingButtonTypes } from '../lib/enums';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  ADD_JOKE,
  RATE_JOKE,
  UPDATE_JOKE,

} from '../actions/index';

describe('joke actions', () => {
  const mockStore = configureMockStore([thunk]);

  it('addTodo should create ADD_JOKE action', () => {
    expect(actions.addJoke({text:'Use Redux', rating: 'funny', id: 'HTHTHT'})).toEqual({
      type: ADD_JOKE,
      id: 'HTHTHT',
      rating: 'funny',
      text: 'Use Redux'
    })
  });


  it('rateJoke should create RATE_JOKE action', () => {

    const store = mockStore();
    return store.dispatch(actions.rateJoke(RatingButtonTypes.FUNNY))
        .then(() => {
          expect(store.getActions()[0]).toEqual({
            ratingType:RatingButtonTypes.FUNNY, type: RATE_JOKE
          });

        });

  });

  it('updateJoke should create UPDATE_JOKE action', () => {

    const store = mockStore();
    return store.dispatch(actions.updateJoke({id: 'THHTT', text:'Test', rating: 'funny'}, 0))
        .then(() => {
          expect(store.getActions()[0]).toEqual({joke: {
            id: 'THHTT', text:'Test', rating: 'funny'},
            index: 0,
            type: UPDATE_JOKE
          });

        });

  })
})
