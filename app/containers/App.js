import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Layout from '../components/Layout';
import * as TodoActions from '../actions/todos';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {type: props.type};
  }

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions, type, title } = this.props;

    return (
      <div className={style.normal}>
        <Layout 
          type={type}
          title={title}
        />
      </div>
    )

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
