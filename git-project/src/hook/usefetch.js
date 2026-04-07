import { useEffect, useMemo, useState } from 'react';

const useFetch = (city = 'delhi') => {
    const key = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = useMemo(() => {
        return `${baseUrl}?q=${encodeURIComponent(city)}&appid=${key}`;
    }, [baseUrl, city, key]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, error, loading };
};

export default useFetch;