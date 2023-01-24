import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortcut);
  const [result, setResult] = useState(0);

  const currenciesList = currencies.map((currency) => {
    return (
      <option key={currency.id} value={currency.shortcut}>
        {currency.shortcut} - {currency.name}
      </option>
    );
  });

  const showResult = (currency, amount) => {
    const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;
    setResult(amount / rate);
  };

  const onAmountChange = ({ target }) => setAmount(target.value);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    showResult(currency, amount);
  };

  const reset = () => {
    setResult(0);
    setAmount("");
    setCurrency(currencies[0].shortcut);
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
        Wynik: <strong>{result.toFixed(2)}</strong>
      </p>
    </form>
  );
};

export default Form;
