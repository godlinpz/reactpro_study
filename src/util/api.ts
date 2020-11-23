import Url from 'url';
import config from '../config';

export interface IApiParams {
    [k: string]: string | number;
}

export type ApiEndpoints = 'getPokemons';

export async function api(endpoint: ApiEndpoints, options: IApiParams = {}): Promise<any> {
    const ep = config.client.endpoint[endpoint];
    const srv = config.client.server;
    const isGet = ep.method === 'GET';

    const params = { limit: ep.default_page_size, ...options };

    const link = Url.format({
        ...srv,
        pathname: srv.base_url + ep.url.pathname,
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
