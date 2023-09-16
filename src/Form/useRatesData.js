import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    isLoading: true,
  });

  // const requestURL = "currency-converter-react/testData.json";
  const requestURL =
    "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF";

  useEffect(() => {
    setTimeout(() => {
      fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
          setRatesData({
            isLoading: false,
            data: data,
            date: data.date,
          });
        })
        .catch((error) => {
          setRatesData({
            isLoading: false,
            error: error,
          });
        });
    }, 1000);
  }, []);

  return { ratesData };
};
