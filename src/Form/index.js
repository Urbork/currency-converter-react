import { useState } from "react";
import {
  MainForm,
  Fieldset,
  FormLegend,
  FormLabel,
  FormInput,
  FormButton,
  FormInfo,
} from "./styled.js";
import { useQuery } from "@tanstack/react-query";
import { ratesQueryOptions } from "./queries/ratesQueryOptions.js";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState({
    toAmount: 0,
    fromAmount: 0,
  });

  const { data: ratesData, isPending, isError } = useQuery(ratesQueryOptions);

  if (isPending) {
    return (
      <div>
        <MainForm>⏳ Ładowanie... Proszę czekać.</MainForm>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <MainForm>❌ Wystąpił błąd... Spróbuj później.</MainForm>
      </div>
    );
  }

  const currenciesList =
    ratesData && ratesData.data
      ? Object.keys(ratesData.data).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))
      : null;

  const updateDate = new Date(ratesData.meta.last_updated_at);
  const localDateTime = `${updateDate.toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })}`;

  const updateResult = (currency, amount) => {
    const rate = ratesData.data[currency]?.value ?? 0;

    setResult({
      fromAmount: amount,
      toAmount: amount * rate,
      currency: currency,
    });
  };

  const onAmountChange = ({ target }) => setAmount(target.value);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    updateResult(currency, amount);
  };

  const reset = (event) => {
    event.preventDefault();
    setResult({
      fromAmount: 0,
      toAmount: 0,
    });
    setAmount("");
    setCurrency(Object.keys(ratesData.data)[0]);
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      <Fieldset>
        <FormLegend>Chcę wymienić</FormLegend>
        <p>
          <FormLabel>
            Kwota:
            <FormInput
              type="number"
              placeholder="podaj kwotę"
              min="0"
              step="0.01"
              autoFocus
              required
              value={amount}
              onChange={onAmountChange}
            />
          </FormLabel>
        </p>
        <p>
          <FormLabel>
            Chcę otrzymać:
            <FormInput
              as="select"
              name="currency"
              value={currency}
              onChange={onSelectChange}
            >
              {currenciesList}
            </FormInput>
          </FormLabel>
        </p>
        {/* <p>
          <FormLabel>
            Wynik:
            <FormInput
              type="number"
              placeholder="wynik"
              min="0"
              step="0.01"
              value={result.toAmount.toFixed(2)}
              disabled
            />
          </FormLabel>
        </p> */}
      </Fieldset>

      <p>
        <FormButton>Przelicz</FormButton>
        <FormButton reset type="reset" onClick={reset}>
          Wyczyść
        </FormButton>
      </p>
      <p>
        Wynik:{" "}
        <strong>
          {result.fromAmount} PLN = {result.toAmount.toFixed(2)}{" "}
          {result.currency}
        </strong>
      </p>
      <FormInfo>Kursy walut zostały pobrane dnia: {localDateTime}</FormInfo>
    </MainForm>
  );
};

export default Form;
