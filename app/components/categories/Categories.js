import React, { Component } from 'react';
import style from './Categories.css';
import PropTypes from 'prop-types';

export default class Categories extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            categories: props.categories
        }
    }

    render = () => {
        const { categories } = this.state;

        return (
            <pre>{JSON.stringify(categories)}</pre>
        );
    }
}