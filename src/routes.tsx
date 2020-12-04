import React, { PropsWithChildren } from 'react';

import DocsPage from './pages/Docs';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';
import PokemonPage, { IPokemonProps } from './pages/Pokemon';

interface IMenu {
    title: string;
    link: string;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum EMenuLinks {
    HOME = '/',
    POKEDEX = '/pokedex',
    POKEMON = '/pokedex/:id',
    LEGENDARIES = '/legend',
    DOCS = '/docs',
}

export const GENERAL_MENU: IMenu[] = [
    {
        title: 'Home',
        link: EMenuLinks.HOME,
        component: () => <HomePage />,
    },
    {
        title: 'Pokedex',
        link: EMenuLinks.POKEDEX,
        component: () => <PokedexPage />,
    },
    {
        title: 'Legendaries',
        link: EMenuLinks.LEGENDARIES,
        component: () => <LegendariesPage />,
    },
    {
        title: 'Docs',
        link: EMenuLinks.DOCS,
        component: () => <DocsPage />,
    },
];

const HIDDEN_ROUTES: IMenu[] = [
    {
        title: 'Pokemon',
        link: EMenuLinks.POKEMON,
        component: ({ id }: IPokemonProps) => <PokemonPage id={id} />,
    },
];

interface IRouteItem {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...HIDDEN_ROUTES].reduce((acc: IRouteItem, item: IMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;
