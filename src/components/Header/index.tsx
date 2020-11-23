import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { A, usePath } from 'hookrouter';

import { ReactComponent as LogoSvg } from './assets/Logo.svg';

import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';

const Header: FunctionComponent = () => {
    const path = usePath();
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <LogoSvg />
                </div>
                <div className={s.menuWrap}>
                    {GENERAL_MENU.map(({ title, link }) => (
                        <A
                            key={title}
                            href={link}
                            className={classnames(s.menuLink, { [s.activeLink]: link === path })}>
                            {title}
                        </A>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
