import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    // console.log('useDebounce start', value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            // console.log('useDebounce update', value);
        }, delay);

        return () => clearInterval(handler);
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
