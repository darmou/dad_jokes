import React from 'react'
import PropTypes from 'prop-types'
import { RatingButtonTypes } from '../../lib/enums';
import upArrow from './up-arrow.svg';
import downArrow from './down-arrow.svg';
import "./RatingButton.css";

const RatingButton = ({ type, rateJoke }) => (
    <button className='RatingButton'
        onClick={rateJoke.bind(this, type)}
        type={type}
    >
      <img src={(type === RatingButtonTypes.FUNNY) ? upArrow: downArrow} className="ratingArrow" alt="arrow" />
      {(type === RatingButtonTypes.FUNNY) ? 'Funny' : 'Not Funny'}
    </button>
);

RatingButton.propTypes = {
  type: PropTypes.string.isRequired,
  rateJoke: PropTypes.func.isRequired
};

export default RatingButton;