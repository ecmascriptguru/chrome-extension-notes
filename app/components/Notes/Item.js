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
            notes: props.items
        }
    }

    redner = () => {
        const { notes } = this.state;

        if ( notes.length > 0 ) {
            return (
                <h5>{notes.length}</h5>
            );
        } else {
            return (
                <h5>Not found.</h5>
            )
        }
    }
}