import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudPng from './assets/Cloud1.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);

    const onMouseMove = (event: MouseEvent) => {
        setScreenX(event.screenX);
        setScreenY(event.screenY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => window.removeEventListener('mousemove', onMouseMove);
    }, [screenX, screenY]);

    const translate = (offset: number) => ({
        transform: `translate(${-screenX * offset}px, ${-screenY * offset}px)`,
    });

    return (
        <div className={s.root}>
            <div className={s.smallPokeBall} style={translate(0.05)}>
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div className={s.cloud} style={translate(0.04)}>
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div className={s.cloudBig} style={translate(0.03)}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>

            <div className={s.pokeBall} style={translate(0.02)}>
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div className={s.pikachu} style={translate(0.01)}>
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};

export default Parallax;
