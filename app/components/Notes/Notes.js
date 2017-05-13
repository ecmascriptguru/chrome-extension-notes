import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Notes.css';
import * as ActionTypes from '../../constants/ActionTypes';

import { Button } from 'react-bootstrap';

export default class Notes extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        notes: PropTypes.array.isRequired,
        onPropertyTypeChanged: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        }

        this.manageCategory = this.manageCategory.bind(this);
        this.newNote = this.newNote.bind(this);
    }

    manageCategory = () => {
        this.props.onPropertyTypeChanged(ActionTypes.BROWSES_CATEGORIES);
    }

    newNote = () => {
        this.props.onPropertyTypeChanged(ActionTypes.NEW_NOTE);
    }

    renderButtons = () => {
        return (
            <div>
                <Button 
                    className={style.manageCategory}
                    onClick={this.manageCategory}
                    >Manage Category
                </Button>
                <Button 
                    className={style.newNote}
                    onClick={this.newNote}
                    >New Note
                </Button>
            </div>
        );
    }

    renderNotes = () => {
        const { type, notes } = this.props;

        const items = notes.map((note) => {
            <Item 
                note={note}
            />
        });

        if (items.length > 0) {
            return (
                <div>
                    <ul className={style.list}>
                        {items}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>No note found.</h3>
                </div>
            )
        }
    }

    render = () => {
        return (
            <div className="style.notes">
                { this.renderButtons() }
                { this.renderNotes() }
            </div>
        );
    }
}