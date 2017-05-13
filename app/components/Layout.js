import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';
import Header from './Header';
import * as ActionTypes from '../constants/ActionTypes';
import Notes from './notes/Notes';

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
    let content = null;
    let items = [];
    if (type == ActionTypes.BROWSE_NOTES) {
      content = <Notes type={type} notes={items}/>
    }
    return (
      <section className={style.main}>
        <Header title={title} />
        {content}
      </section>
    )
  };
};
