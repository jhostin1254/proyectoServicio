import { useEffect, useState } from "react";

export function getInstance(url, dpanta) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (dpanta) {
            setLoading(true);
            fetch(url)
                .then(response => response.json())
                .then(allData => {
                    const filteredData = allData.filter(item => item.dpanta.includes(dpanta));
                    setData(filteredData);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
        else {
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
        }


    }, [url]);

    return { data, loading, error };
}