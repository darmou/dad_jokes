import React from 'react';
import PropTypes from 'prop-types';
import "./Joke.css";

const Joke = ({ joke }) => {
  return (
  <div className='Joke'>
    {joke.text}
      <div  className='rating'>{joke.rating}</div>

  </div>
)};

Joke.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Joke;
