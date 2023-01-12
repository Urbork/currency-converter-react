import "./style.css";

const Form = () => (
  <form className="form">
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
            autofocus
            required
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          Chcę otrzymać:
          <select className="form__input" name="currency">
            <option value="EUR">EUR - euro</option>
            <option value="USD">USD - dolar amerykański</option>
            <option value="GBP">GBP - funt brytyjski</option>
            <option value="CHF">CHF - frank szwajcarski</option>
          </select>
        </label>
      </p>
    </fieldset>
    <p>* - Pole obowiązkowe</p>
    <p>
      <button className="form__button">Przelicz</button>
      <button className="form__button form__button--reset" type="reset">
        Wyczyść
      </button>
    </p>
    <p>
      Wynik: <strong>N/A</strong>
    </p>
  </form>
);

export default Form;
