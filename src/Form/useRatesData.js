import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ratesError, setRatesError] = useState(false);
  const [ratesData, setRatesData] = useState({});

  // const requestURL = "currency-converter-react/testData.json";
  const requestURL =
    "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF";

  useEffect(() => {
    setTimeout(() => {
      fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setRatesData(data.rates);
        })
        .catch((error) => {
          setIsLoading(false);
          setRatesError(error);
        });
    }, 1000);
  }, []);

  return { ratesData, isLoading, ratesError };
};
