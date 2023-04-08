import { useState } from "react";
import { currencies } from "../currencies/currencies";
import { MainForm, Fieldset, FormLegend, FormLabel, FormInput, FormSelect, FormButton } from "./styled.js";

const DEFAULT_CURRENCY = currencies[0].shortcut;

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [result, setResult] = useState({
    toAmount: 0,
    fromAmount: 0,
  });

  const currenciesList = currencies.map((currency) => (
    <option key={currency.name} value={currency.shortcut}>
      {currency.shortcut} - {currency.name}
    </option>
  ));

  const updateResult = (currency, amount) => {
    const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;

    setResult({
      fromAmount: amount,
      toAmount: amount / rate,
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
    setCurrency(DEFAULT_CURRENCY);
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
            <FormSelect
              name="currency"
              value={currency}
              onChange={onSelectChange}
            >
              {currenciesList}
            </FormSelect>
          </FormLabel>
        </p>
      </Fieldset>
      <p>* - Pole obowiązkowe</p>
      <p>
        <FormButton>Przelicz</FormButton>
        <FormButton
          reset
          type="reset"
          onClick={reset}
        >
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
