import { queryOptions } from "@tanstack/react-query";

const requestURL = "currency-converter-react/testData2.json";
// const requestURL =
//   "https://api.currencyapi.com/v3/latest?apikey=cur_live_gAmVOn4d5Ohsh3FgKcWHCMnVeNSKAHK7UIXvp854&currencies=EUR%2CUSD%2CGBP&base_currency=PLN";

export const ratesQueryOptions = queryOptions({
  queryFn: () => fetch(requestURL).then((res) => res.json()),
  queryKey: ["ratesData"],
  retry: 1,
  retryDelay: 3000,
  staleTime: 8 * 3600 * 1000,
});
