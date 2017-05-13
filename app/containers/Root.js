import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import * as ActionTypes from '../constants/ActionTypes';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App 
          type={ActionTypes.BROWSE_NOTES}
          title={ActionTypes.titles.BROWSE_NOTES}
        />
      </Provider>
    );
  }
}
