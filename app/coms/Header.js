import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Header.css';

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    };

    render = () => {
        return (
            <div className={style.header}>
                <center><h3>{this.props.title}</h3></center>
            </div>
        )
    }
}