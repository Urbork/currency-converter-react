import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ratesError, setRatesError] = useState(false);
  const [ratesData, setRatesData] = useState({});

  useEffect(() => {
    const requestURL = "currency-converter-react/testData.json";
    // const requestURL =
    //   "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF";

    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setRatesData(data.rates);
        console.log(data.rates);
      })
      .catch((error) => {
        setIsLoading(false);
        setRatesError(error);
        console.error("Something bad happened!", error);
      });
  }, []);

  return { ratesData, isLoading, ratesError };
};
