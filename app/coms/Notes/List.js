import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './List.css';

export default class List extends Component {
    static propTypes = {
        notes: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes
        }
    }
}