import React, { Component } from 'react';
import style from './AddCategory.css';
import PropTypes from 'prop-types';
import * as ActionTypes from '../../constants/ActionTypes';

export default class AddCategory extends Component {
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
    }

    renderButton = () => {
        return (
            <div>
                <pre>{ this.props.categories }</pre>
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