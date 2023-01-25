import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies";

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
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Chcę wymienić</legend>
        <p>
          <label className="form__label">
            Kwota w PLN*:
            <input
              className="form__input"
              type="number"
              placeholder="podaj kwotę"
              min="0"
              step="0.01"
              autoFocus
              required
              value={amount}
              onChange={onAmountChange}
            />
          </label>
        </p>
        <p>
          <label className="form__label">
            Chcę otrzymać:
            <select
              className="form__input"
              name="currency"
              value={currency}
              onChange={onSelectChange}
            >
              {currenciesList}
            </select>
          </label>
        </p>
      </fieldset>
      <p>* - Pole obowiązkowe</p>
      <p>
        <button className="form__button">Przelicz</button>
        <button
          className="form__button form__button--reset"
          type="reset"
          onClick={reset}
        >
          Wyczyść
        </button>
      </p>
      <p>
        Wynik:{" "}
        <strong>
          {result.fromAmount} PLN = {result.toAmount.toFixed(2)}{" "}
          {result.currency}
        </strong>
      </p>
    </form>
  );
};

export default Form;
