import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';
import Header from './Header';

export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { type: props.type };
  };

  render() {
    const { type, title } = this.props;
    
    return (
      <section className={style.main}>
        <Header title={title} />
        <div className={style.todoList}>{type}</div>
      </section>
    )
  };
};
