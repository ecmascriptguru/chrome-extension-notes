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
            <header className={style.header}>
                <h3 className={style.title}>{this.props.title}</h3>
            </header>
        )
    }
}