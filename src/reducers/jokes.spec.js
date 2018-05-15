import jokes from './jokes'
import {
  ADD_JOKE,
  UPDATE_JOKE,
} from '../actions/index';

describe('jokes reducer', () => {
  it('should handle initial state', () => {
    expect(
      jokes(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_JOKE', () => {
    expect(
      jokes([], {
        type: ADD_JOKE,
        text: 'Run the tests',
        rating: 'funny',
        id: 'HDNDHNDN'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        rating: 'funny',
        id: 'HDNDHNDN'
      }
    ])

    expect(
      jokes([
        {
          text: 'Run the tests',
          rating: 'funny',
          id: 'HDNDHNDN'
        }
      ], {
        type: ADD_JOKE,
        text: 'Use Redux',
        rating: 'not funny',
        id: 'AHDNEUU'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        rating: 'funny',
        id: 'HDNDHNDN'
      }, {
        text: 'Use Redux',
        rating: 'not funny',
        id: 'AHDNEUU'
      }
    ])

   expect(
      jokes([
        {
          text: 'Run the tests',
          rating: 'not funny',
          id: 'HDNDHNDN'
        }, {
          text: 'Use Redux',
          rating: 'not funny',
          id: 'AHDNEUU'
        }
      ], {
        type: ADD_JOKE,
        text: 'Fix the tests',
        rating: 'funny',
        id: 'XTHSTHT'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        rating: 'not funny',
        id: 'HDNDHNDN'
      }, {
        text: 'Use Redux',
        rating: 'not funny',
        id: 'AHDNEUU'
      }, {
        text: 'Fix the tests',
        rating: 'funny',
        id: 'XTHSTHT'
      }
    ])
  })

  it('should handle UPDATE_JOKE', () => {
    expect(
      jokes([
        {
          text: 'Run the tests',
          rating: 'not funny',
          id: 'HDNDHNDN'
        }, {
          text: 'Use Redux',
          rating: 'not funny',
          id: 'AHDNEUU'
        }
      ], {
        type: 'UPDATE_JOKE',
        index: 0,
        joke: {
          text: 'Run the tests',
          rating: 'funny',
          id: 'HDNDHNDN'
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        rating: 'funny',
        id: 'HDNDHNDN'
      }, {
        text: 'Use Redux',
        rating: 'not funny',
        id: 'AHDNEUU'
      }
    ])
  })

})
