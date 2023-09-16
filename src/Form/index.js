import { useState } from "react";
import { useRatesData } from "./useRatesData";
import {
  MainForm,
  Fieldset,
  FormLegend,
  FormLabel,
  FormInput,
  FormButton,
} from "./styled.js";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState({
    toAmount: 0,
    fromAmount: 0,
  });

  const { ratesData } = useRatesData();

  if (ratesData.isLoading) {
    return (
      <div>
        <MainForm>⏳ Ładowanie... Proszę czekać.</MainForm>
      </div>
    );
  }

  if (ratesData.error) {
    return (
      <div>
        <MainForm>❌ Wystąpił błąd: {ratesData.error.message}</MainForm>
      </div>
    );
  }

  const currenciesList = Object.keys(ratesData.data.rates).map((currency) => (
    <option key={currency} value={currency}>
      {currency} | {(1 / ratesData.data.rates[currency]).toFixed(4)}
    </option>
  ));

  const updateResult = (currency, amount) => {
    const rate = ratesData.data.rates[currency];

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
    setCurrency(Object.keys(ratesData.data.rates)[1]);
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      <Fieldset>
        <FormLegend>Chcę wymienić</FormLegend>
        <p>
          <FormLabel>
            Kwota w PLN*:
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
      </Fieldset>
      <p>* - Pole obowiązkowe</p>
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
      <p>Kursy walut zostały pobrane dnia: {ratesData.data.date}</p>
    </MainForm>
  );
};

export default Form;
