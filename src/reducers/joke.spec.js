import joke from "./joke";
import {
  RATE_JOKE,
  RECEIVE_JOKE,
  REQUEST_JOKE
} from "../actions";

describe('joke reducer', () => {
  it('should handle initial state', () => {
    expect(
        joke(undefined, {})
    ).toEqual(null)
  })

  it('should handle RATE_JOKE', () => {

    expect(
        joke({}, {
          type: RATE_JOKE,
          text: 'Run the tests',
          rating: 'not funny',
          id: 'HDNDHNDN'
        })
    ).toEqual(
      {
        rating: 'not funny',
      }
    )
  })

})