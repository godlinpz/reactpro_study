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
                url_params: [''],
                default_page_size: 9,
            },
            getPokemon: {
                method: 'GET',
                url: {
                    pathname: 'pokemon',
                },
                url_params: ['id'],
                default_page_size: 0,
            },
        },
    },
};

export default config;
