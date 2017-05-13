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
    notes: state.notes.notes,
    categories: state.notes.categories
  }),
  dispatch => ({
    actions: bindActionCreators(NoteActions, dispatch)
  })
)
export default class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      title: props.title
    };
  }

  render() {
    const { actions, title, type } = this.props;
    const { notes, categories } = this.props;

    return (
      <div className={style.normal}>
        <Layout 
          type={type}
          title={title}
          notes={notes}
          categories={categories}
        />
      </div>
    );
  }
}
