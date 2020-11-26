import React, { FunctionComponent } from 'react';
// import classnames from 'classnames';
import { useRoutes } from 'hookrouter';

// import s from './App.module.scss';
// import './custom.css';

import Header from './components/Header';
import NotFoundPage from './pages/NotFound';
import routes from './routes';

const App: FunctionComponent = () => {
    const routeResult = useRoutes(routes);

    return routeResult ? (
        <>
            <Header />
            {routeResult}
        </>
    ) : (
        <NotFoundPage />
    );
};

export default App;
