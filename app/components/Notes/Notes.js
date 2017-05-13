import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import style from './Notes.css';
import * as ActionTypes from '../../constants/ActionTypes';

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

    // renderButtons = () => {
    //     return (
    //         <h3>Buttons here</h3>
    //     );
    // }

    renderContent  = () => {
        if (this.state.type === ActionTypes.BROWSE_NOTES) {
            return (
                <List
                    notes={ this.props.notes }
                />
            )
        }
    }

    render = () => {
        const { type, notes } = this.props;

        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }
}