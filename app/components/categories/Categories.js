import React, { Component } from 'react';
import style from './Categories.css';
import PropTypes from 'prop-types';
import * as ActionTypes from '../../constants/ActionTypes';

export default class Categories extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        onPropertyTypeChanged: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            categories: props.categories
        }

        this.onNewCategory = this.onNewCategory.bind(this);
    }

    onNewCategory = () => {
        this.props.onPropertyTypeChanged(ActionTypes.NEW_CATEGORY);
    }

    renderButton = () => {
        return (
            <div>
                <button
                    className={ style.newCategory }
                    onClick={ this.onNewCategory }
                    >New Category
                </button>
            </div>
        );
    }

    render = () => {
        const { categories } = this.state;

        return (
            <div>
                { this.renderButton() }
                <pre>{JSON.stringify(categories)}</pre>
            </div>
        );
    }
}