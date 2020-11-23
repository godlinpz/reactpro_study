import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
    type?: 'default' | 'third';
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, type = 'default', onClick }) => {
    return (
        <button className={classnames(s.root, s[type])} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
