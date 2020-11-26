import React, { FunctionComponent } from 'react';
// import classnames from 'classnames';

import Layout from '../../components/Layout';
// import Button from '../../components/Button';

import s from './Pokemon.module.scss';
import Heading from '../../components/Heading/index';
import PokemonCard from '../../components/PokemonCard';
import { PokemonData } from '../../interfaces/api';
import useData from '../../hooks/useData';

export interface IPokemonProps {
    id: string | number;
}

const Pokemon: FunctionComponent<IPokemonProps> = ({ id }) => {
    const { data, isLoading, isError } = useData<PokemonData>('getPokemon', { id });

    let render;
    if (isError) render = <div>Error!</div>;
    else
        render = (
            <div className={s.root}>
                <Layout>
                    <Heading>{!isLoading && data?.name} </Heading>
                    {(isError && <div>Error!</div>) || (isLoading && <div>Loading...</div>) || (
                        <div className={s.pokemon}>
                            {!isLoading && <PokemonCard key={data.name} pokemon={data} tabIndex={0} />}
                        </div>
                    )}
                </Layout>
            </div>
        );

    return render;
};

export default Pokemon;
