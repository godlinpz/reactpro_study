import React, { FunctionComponent } from 'react';
// import classnames from 'classnames';
import { navigate } from 'hookrouter';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading/index';

import s from './Home.module.scss';
import { EMenuLinks } from '../../routes';

const Home: FunctionComponent = () => {
    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading className={s.heading}>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </Heading>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button onClick={() => navigate(EMenuLinks.POKEDEX)}>See pokemons</Button>
                </div>
                <div className={s.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
