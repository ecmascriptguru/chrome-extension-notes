import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import style from './Notes.css';

const NOTES_PAGE_TYPE_LIST = 'NOTES_PAGE_TYPE_LIST';
const NOTES_PAGES = {
    NOTES_PAGE_TYPE_LIST: function(props) {
        return (
            <List
                notes={props.notes}
            />
        );
    }
}
export default class Notes extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        }
    }

    render = () => {
        const { type, notes } = this.props;

        return NOTES_PAGES[type];
    }
}