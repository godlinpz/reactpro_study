import React, { FunctionComponent, useState } from 'react';
// import classnames from 'classnames';

import Layout from '../../components/Layout';
// import Button from '../../components/Button';

import s from './Pokedex.module.scss';
import Heading from '../../components/Heading/index';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hooks/useData';
import { IPokemons, IOptions, PokemonData } from '../../interfaces/api';
import useDebounce from '../../hooks/useDebounce';

const Pokedex: FunctionComponent = () => {
    const [searchVal, setSearchVal] = useState('');
    const [options, setOptions] = useState<IOptions>({});

    const deboncedSearch = useDebounce(searchVal, 500);

    const { data, isLoading, isError } = useData<IPokemons>('getPokemons', options, [deboncedSearch]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
        setOptions((opts: IOptions) => ({
            ...opts,
            name: e.target.value,
        }));
    };

    let render;
    if (isError) render = <div>Error!</div>;
    else
        render = (
            <div className={s.root}>
                <Layout>
                    <Heading>{!isLoading && data?.total} Pokemons</Heading>
                    <div>
                        <input value={searchVal} onChange={onSearchChange} />
                    </div>
                    {(isError && <div>Error!</div>) || (isLoading && <div>Loading...</div>) || (
                        <div className={s.pokedex}>
                            {!isLoading &&
                                data?.pokemons.map((poke: PokemonData, i: number) => (
                                    <PokemonCard key={poke.name} pokemon={poke} tabIndex={i} />
                                ))}
                        </div>
                    )}
                </Layout>
            </div>
        );

    return render;
};

export default Pokedex;
