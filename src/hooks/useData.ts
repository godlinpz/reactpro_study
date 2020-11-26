import { useEffect, useState } from 'react';
import { api, ApiEndpoints } from '../util/api';
import { IOptions } from '../interfaces/api';

type useDataResult = {
    data: any;
    isLoading: boolean;
    isError: boolean;
};

function useData<T>(endpoint: ApiEndpoints, options: IOptions = {}, deps: Array<any> = []): useDataResult {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const resp = await api<T>(endpoint, options);
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
