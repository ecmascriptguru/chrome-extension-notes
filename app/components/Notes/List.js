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

    renderButtons = () => {
        return (
            <h3>Buttons here</h3>
        );
    }

    render = () => {
        const { notes } = this.props;

        const items = notes.map((note) => {
            <Item 
                note={note}
            />
        });

        if (items.length > 0) {
            return (
                <div>
                    { this.renderButtons() }
                    <ul className={style.list}>
                        {items}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    { this.renderButtons() }
                    <h3>No note found.</h3>
                </div>
            )
        }
    }
}