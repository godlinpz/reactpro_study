import React from 'react';

import DocsPage from './pages/Docs';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';

interface IMenu {
    title: string;
    link: string;
    component: () => JSX.Element;
}

export enum EMenuLinks {
    HOME = '/',
    POKEDEX = '/pokedex',
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

interface IRouteItem {
    [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IRouteItem, item: IMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;
