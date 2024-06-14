import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    let url = ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-06-11/v1/currencies/${currency}.json `
    useEffect(() => {
        fetch(url)
        .then((response)=> response.json())
        .then((response)=>  setData(response[currency]))
    }, [currency])

    console.log(data);
    return data 
}

export default useCurrencyInfo;
