import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Layout from '../components/Layout';
import * as NoteActions from '../actions/notes';
import style from './App.css';

@connect(
  state => ({
    notes: state.notes,
    categories: state.categories,
    type: state.type
  }),
  dispatch => ({
    actions: bindActionCreators(NoteActions, dispatch)
  })
)
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {type: props.type};
  }

  static propTypes = {
    notes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { actions, type, title } = this.props;

    return (
      <div className={style.normal}>
        <Layout 
          type={type}
          title={title}
        />
      </div>
    );
  }
}
