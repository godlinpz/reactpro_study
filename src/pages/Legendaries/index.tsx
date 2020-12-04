import React, { FunctionComponent } from 'react';
// import classnames from 'classnames';
// import {navigate} from 'hookrouter';

import Layout from '../../components/Layout';
// import Button from '../../components/Button';
// import Parallax from '../../components/Parallax';

import s from './Legendaries.module.scss';
// import { ELinks } from '../../routes';

const Legendaries: FunctionComponent = () => {
    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>Legendaries</Layout>
        </div>
    );
};

export default Legendaries;
