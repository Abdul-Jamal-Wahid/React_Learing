import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                // Set the fetched data
                setData(jsonData[currency]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]); // Dependency array to re-run effect when currency changes

    return data;
}

export default useCurrencyInfo;
