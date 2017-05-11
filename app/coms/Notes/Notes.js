import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import style from './Notes.css';
import * as PageTypes from '../../constants/PageTypes';

const NOTES_PAGES = {
    BROWSE_NOTES: function(props) {
        return (
            <List
                notes={props.notes}
            />
        );
    }
}
export default class Notes extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        notes: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        }
    }

    render = () => {
        const { type, notes } = this.props;

        return NOTES_PAGES[type](this.props);
    }
}