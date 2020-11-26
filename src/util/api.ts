import Url from 'url';
import config from '../config';
import { IOptions } from '../interfaces/api';

export type ApiEndpoints = 'getPokemons' | 'getPokemon';

export async function api<T>(endpoint: ApiEndpoints, options: IOptions = {}): Promise<T> {
    const ep = config.client.endpoint[endpoint];
    const srv = config.client.server;
    const isGet = ep.method === 'GET';

    const params = JSON.parse(JSON.stringify({ limit: ep.default_page_size, ...options }));

    const urlParams = ep.url_params.map((p: string) => (p && params[p] ? `/${params[p]}` : '')).join('');

    const link = Url.format({
        ...srv,
        pathname: srv.base_url + ep.url.pathname + urlParams,
        query: isGet ? params : null,
    });

    // console.log('LINK', link);

    const query = params
        ? Url.format({
              query: params,
          })?.split('?')[1]
        : null;

    const response = await fetch(link, {
        method: ep.method,
        body: isGet ? null : query,
    });

    const resp = await response.json();
    // console.log('API RESP', resp);

    return resp;
}

export default api;
