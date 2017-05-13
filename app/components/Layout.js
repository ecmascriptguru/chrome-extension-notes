import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';
import Header from './Header';
import * as ActionTypes from '../constants/ActionTypes';
import Notes from './notes/Notes';
import AddNote from './notes/AddNote';

export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { type: props.type };

    this.typeChangeHandler = this.typeChangeHandler.bind(this);
  };

  typeChangeHandler = (type) => {
    this.setState({
      type: type,
      title: ActionTypes.titles[type]
    });
  }

  renderContent = () => {
    if (this.state.type == ActionTypes.BROWSE_NOTES) {
      return(
        <Notes 
          type={this.props.type}
          notes={this.props.notes}
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    } else if (this.state.type === ActionTypes.NEW_NOTE) {
      return (
        <AddNote />
      );
    }
  }

  render() {
    const { title } = this.state;
    return (
      <section className={style.main}>
        <Header title={title} />
        { this.renderContent() }
      </section>
    )
  };
};
