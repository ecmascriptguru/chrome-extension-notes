import React, { Component } from 'react';
import style from 'Item.css';
import PropTypes from 'prop-types';

export default class Item extends Component {
    static propTypes = {
        value: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            note: props.note
        }
    }

    redner = () => {
        const { note } = this.state;

        return (
            <pre>{JSON.stringify(note)}</pre>
        );
    }
}