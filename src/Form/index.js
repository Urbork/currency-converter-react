import { useState } from "react";
// import { currencies } from "../currencies/currencies";
import { useRatesData } from "./useRatesData";
import {
  MainForm,
  Fieldset,
  FormLegend,
  FormLabel,
  FormInput,
  FormButton,
} from "./styled.js";

// const DEFAULT_CURRENCY = currencies[0].shortcut;

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState({
    toAmount: 0,
    fromAmount: 0,
  });

  const { ratesData, isLoading, ratesError } = useRatesData();

  if (isLoading) {
    return (
      <div>
        <MainForm>⏳ Loading... Please wait.</MainForm>
      </div>
    );
  }

  if (ratesError) {
    return (
      <div>
        <MainForm>❌ Wystąpił błąd: {ratesError.message}</MainForm>
      </div>
    );
  }

  const currenciesList = Object.keys(ratesData).map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));

  // const currenciesList = currencies.map((currency) => (
  //   <option key={currency.name} value={currency.shortcut}>
  //     {currency.shortcut} - {currency.name}
  //   </option>
  // ));

  // console.log(Object.keys(ratesData));
  // console.log(currencies);
  // console.log(ratesData);

  const updateResult = (currency, amount) => {
    // const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;
    const rate = ratesData[currency];

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

  const reset = () => {
    setResult({
      fromAmount: 0,
      toAmount: 0,
    });
    setAmount("");
    // setCurrency("DEFAULT_CURRENCY");
    // setCurrency("USD");
    setCurrency(Object.keys(ratesData)[1]);
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
    </MainForm>
  );
};

export default Form;
