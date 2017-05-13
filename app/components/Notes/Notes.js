import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Notes.css';
import * as ActionTypes from '../../constants/ActionTypes';

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
        alert("Manage Category clicked.");
    }

    newNote = () => {
        this.props.onPropertyTypeChanged(ActionTypes.NEW_NOTE);
    }

    renderButtons = () => {
        return (
            <div>
                <button 
                    className={style.manageCategory}
                    onClick={this.manageCategory}
                    >Manage Category
                </button>
                <button 
                    className={style.newNote}
                    onClick={this.newNote}
                    >New Note
                </button>
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