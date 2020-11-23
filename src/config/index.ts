export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru',
            base_url: '/api/v1/',
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                url: {
                    pathname: 'pokemons',
                },
                default_page_size: 9,
            },
        },
    },
};

export default config;
