
export const REQUEST_JOKE = 'REQUEST_JOKE';
export const RECEIVE_JOKE = 'RECEIVE_JOKE';
export const RECEIVE_JOKE_FAILURE = 'RECEIVE_JOKE_FAILURE';
export const ADD_JOKE = 'ADD_JOKE';
export const UPDATE_JOKE = 'UPDATE_JOKE';
export const RATE_JOKE = 'RATE_JOKE';

//We want to add our joke after rating updates the state
export const rateJoke = (ratingType) => dispatch => {
  dispatch({
    type: RATE_JOKE,
    ratingType: ratingType,
  });
  return Promise.resolve()
};


export const addJoke = ({text, rating, id}) => ({
  type: ADD_JOKE,
  id: id,
  rating: rating,
  text: text
});

export const updateJoke = (joke, index) => dispatch => {
  dispatch({
    type: UPDATE_JOKE,
    joke: joke,
    index: index
  });
  return Promise.resolve();
};

export const requestJoke = () => {
    return {
        type: REQUEST_JOKE
    }
};

export const receiveJoke = (joke) => {
    return {
        type: RECEIVE_JOKE,
        joke: joke,
        receivedAt: Date.now()
    }
};

export const receiveJokeFailure = (error) => {
  return {
    type: RECEIVE_JOKE_FAILURE,
    error: error,
    receivedAt: Date.now()
  }
};


const fetchNewJoke = async () => {

  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');

  const myInit = { method: 'GET',
    headers: myHeaders
  };

  const myRequest = new Request('https://icanhazdadjoke.com/', myInit);
  const response = await fetch(myRequest);
  const json = await response.json();
  return json;
};

export const fetchJoke = () => {

  return async dispatch => {
    try {
      // wait for the fetch to finish then dispatch the result
      dispatch(requestJoke());
      const data = await fetchNewJoke();
      dispatch(receiveJoke(data));
    } catch (e) {

      // catch errors from fetch
      dispatch(receiveJokeFailure(e));
    }
  };
};