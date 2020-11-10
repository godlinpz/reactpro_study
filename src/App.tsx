import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import s from './App.module.scss';
import './custom.css';

const App: FunctionComponent = () => {
    return (
        <div>
            <div className={s.header}>Welcome!</div>
            <div className={classnames('color')}>React is hot!</div>
            <p>Привет</p>
        </div>
    );
};

export default App;
