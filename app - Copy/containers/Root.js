import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import * as PageTypes from '../constants/PageTypes';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App 
          type={PageTypes.BROWSE_NOTES}
          title={PageTypes.titles.BROWSE_NOTES}
        />
      </Provider>
    );
  }
}
