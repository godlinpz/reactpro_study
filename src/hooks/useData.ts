import { useEffect, useState } from 'react';
import { api, ApiEndpoints, IApiParams } from '../util/api';

type useDataResult = {
    data: any;
    isLoading: boolean;
    isError: boolean;
};

function useData(endpoint: ApiEndpoints, options: IApiParams = {}, deps: Array<any> = []): useDataResult {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const resp = await api(endpoint, options);
                setData(resp);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, deps);

    return {
        data,
        isLoading,
        isError,
    };
}

export default useData;
