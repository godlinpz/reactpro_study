import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
    pokemon: any;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ children, pokemon }) => {
    // console.log(pokemon);

    const {
        img,
        name,
        stats,
        types,
        // abilities, base_experience, height, id, weight
    } = pokemon;

    const pName = name[0].toUpperCase() + name.slice(1);
    return (
        <div className={s.root}>
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
