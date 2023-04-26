import { useState, useEffect } from "react";

function SelectOptions() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // pobranie danych z API i ustawienie wartości w state
    const fetchData = async () => {
      const response = await fetch("https://api.exchangerate.host/latest");
      const data = await response.json();
      setOptions(data);
    };
    fetchData();
  }, []);

  return (
    <select>
      {/* użycie metody map() do przetworzenia obiektu z API na elementy listy opcji */}
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectOptions;

// const requestURL = "https://api.exchangerate.host/latest";
// const request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   const response = request.response;
//   console.log(response.rates);
// };
