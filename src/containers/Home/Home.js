import React from 'react';
import PropTypes from 'prop-types';
import Joke from '../../components/Joke/Joke';
import "./Home.css";
import { connect } from 'react-redux'
import { fetchJoke, rateJoke, addJoke, receiveJoke, updateJoke } from '../../actions/';
import { bindActionCreators } from 'redux';
import RatingButton from '../../components/RatingButton/RatingButton';
import { RatingButtonTypes } from '../../lib/enums';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

  state = {
    editId: null
  }

  findFirstId(joke) {
    return joke.id === this.props.match.params.id;
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const joke_index = this.props.jokes.findIndex(this.findFirstId.bind(this));
      if(joke_index > -1) {
        this.props.receiveJoke(this.props.jokes[joke_index]);
        this.setState({editId: joke_index});
      }

    } else if (!this.props.joke) {
      this.props.fetchJoke();
    }

  }

  async onRateClick(rateType) {

    await this.props.rateJoke(rateType);
    if(!this.props.match.params.id) {

      this.props.addJoke(this.props.joke);
      this.props.fetchJoke();

    } else {
      await this.props.updateJoke(this.props.joke, this.state.editId);
      this.props.history.push('/jokes');
    }

    this.props.fetchJoke();


  }

  render() {

    const title = (this.props.match.params.id) ? 'Edit Joke' : 'Home';
    return (
        <div className='Home'>
          <h3>{title}</h3>
          {(this.props.joke && !this.props.joke.isFetching) && <div><Joke
              {...this.props}
          />
            <RatingButton type={RatingButtonTypes.FUNNY} rateJoke={this.onRateClick.bind(this)}/>
            <RatingButton type={RatingButtonTypes.NOT_FUNNY} rateJoke={this.onRateClick.bind(this)}/>


          </div>
          }
        </div>)
  }
}

Home.propTypes = {
  rateJoke: PropTypes.func.isRequired,
};

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchJoke: fetchJoke,
    rateJoke: rateJoke,
    addJoke: addJoke,
    receiveJoke: receiveJoke,
    updateJoke: updateJoke
  }, dispatch);
};

const mapStateToProps = (state) => ({
  joke: state.joke,
  jokes: state.jokes
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
