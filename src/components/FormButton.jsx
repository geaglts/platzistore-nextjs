import React from 'react';
import styles from '@styles/Button.module.scss';
import classNames from '@utils/classNames';

const Button = ({ type = 'primary', label = 'button', classes = [], ...rest }) => {
    return <input type="button" value={label} className={classNames(styles[type], classes)} {...rest} />;
};

export default Button;
