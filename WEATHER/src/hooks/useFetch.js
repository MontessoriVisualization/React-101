import { useState, useEffect } from "react";
function useFetch(lat, lon) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`${import.meta.env.VITE_API_KEY}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_ID}`);
                const response = await fetch(`${import.meta.env.VITE_API_KEY}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_ID}`);
                const json = await response.json();
                console.log(json);
                setData(json);
            }
                catch (err) {
                    setError(err);
                }
                finally {
                    setLoading(false);
                }
        };
        fetchData();
    }, [lat, lon]);
    return { data, loading, error };
}
export default useFetch;