import React from 'react';
import PropTypes from 'prop-types';
import Joke from '../../components/Joke/Joke';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./JokeList.css";

const JokeList = (props) => (
    <div className='JokeList'>
      <h3>Joke List</h3>
      <ul>
        {props.jokes.map((joke) =>
            <li key={joke.id}>
              <Link style={{ textDecoration: "none", color: "black" }}  to={`/jokes/${joke.id}`}>
              <Joke

                  joke={joke}
              />
              </Link>
            </li>
        )}
      </ul>
    </div>
);

JokeList.propTypes = {
    jokes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}


const mapStateToProps = (state) => ({
  jokes: state.jokes
});

export default connect(mapStateToProps)(JokeList);
