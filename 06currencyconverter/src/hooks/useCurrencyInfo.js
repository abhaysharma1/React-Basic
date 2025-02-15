import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        const controller = new AbortController();
        const fetchData = async () => {
            const response = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/currencies/${currency}.json`,
                { signal: controller.signal }
            );
            const result = await response.json();
            setData(result[currency]);
        };

        fetchData();

        return () => controller.abort(); // Cleanup on unmount
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
