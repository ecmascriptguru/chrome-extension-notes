import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Footer.css';

export default class Footer extends Component {
    static propTypes = {
        // title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    };

    render = () => {
        return (
            <footer className={style.footer}>
                <h3 className={style.contact}>Contact me.</h3>
            </footer>
        )
    }
}