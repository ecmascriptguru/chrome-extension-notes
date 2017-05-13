import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './AddNote.css';
import * as ActionTypes from '../../constants/ActionTypes';

export default class AddNote extends Component {
    static propTypes = {
        
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={style.addNote}>
                <input type="text" value="" />
            </div>
        );
    }
}