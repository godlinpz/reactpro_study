import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { navigate } from 'hookrouter';
import { EMenuLinks } from '../../routes';

import Heading from '../Heading';

import s from './PokemonCard.module.scss';
import capitalizeFirstLetter from '../../util/capitalizeFirstLetter';

interface PokemonCardProps {
    pokemon: any;
    tabIndex: number;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ children, pokemon, tabIndex }) => {
    // console.log(pokemon);

    const {
        img,
        name,
        stats,
        types,
        // abilities, base_experience, height, id, weight
    } = pokemon;

    const pName = capitalizeFirstLetter(name);

    const myNavigate = (url: string, params: { [k: string]: string | number } = {}) => {
        navigate(Object.keys(params).reduce((u, p) => u.replace(`:${p}`, params[p].toString()), url));
    };

    const nav = () => myNavigate(EMenuLinks.POKEMON, { id: pokemon.id });

    return (
        <div className={s.root} onClick={nav} onKeyUp={nav} role="button" tabIndex={tabIndex}>
            <div className={s.infoWrap}>
                <Heading size="xs" className={s.titleName}>
                    {pName}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.defense}</div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {types.map((t: string) => (
                        <span key={t} className={classnames(s.label, s[t])}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className={classnames(s.pictureWrap, s[types[0]])} style={{ backgroundImage: 'img' }}>
                <img src={img} alt={pName} />
            </div>
        </div>
    );
};

export default PokemonCard;
