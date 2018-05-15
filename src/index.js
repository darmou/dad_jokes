import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
)
