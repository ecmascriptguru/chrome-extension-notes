import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';
import Header from './Header';
import Footer from './Footer';
import * as ActionTypes from '../constants/ActionTypes';
import Notes from './notes/Notes';
import AddNote from './notes/AddNote';
import Categories from './categories/Categories';
import AddCategory from './categories/AddCategory';

import { Panel } from 'react-bootstrap';

export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { 
      type: props.type,
      title: props.title,
      categories: props.categories
    };

    this.typeChangeHandler = this.typeChangeHandler.bind(this);
  };

  typeChangeHandler = (type) => {
    let title = ActionTypes.titles[type];

    this.setState({
      type: type,
      title: title
    });
  }

  renderContent = (type) => {
    if (type == ActionTypes.BROWSE_NOTES) {
      return(
        <Notes 
          type={this.props.type}
          notes={this.props.notes}
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    } else if (this.state.type === ActionTypes.NEW_NOTE) {
      return (
        <AddNote 
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    } else if (this.state.type === ActionTypes.BROWSES_CATEGORIES) {
      return (
        <Categories
          type={this.state.type}
          categories={this.state.categories}
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    } else if (this.state.type === ActionTypes.NEW_CATEGORY) {
      return (
        <AddCategory
          type={this.state.type}
          categories={this.state.categories}
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    }
  }

  render() {
    const { title, type } = this.state;
    const header = (
      <Header title={title} />
    );
    const footer = (
      <Footer />
    );
    return (
      <div>
        <Panel header={header} footer={footer}>
          { this.renderContent(type) }
        </Panel>
      </div>
    )
  };
};