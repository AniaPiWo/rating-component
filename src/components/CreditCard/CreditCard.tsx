import React, { useState, ChangeEvent, FocusEvent } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface CreditCardProps {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: Focused | undefined;
}

const CreditCard: React.FC = () => {
  const [state, setState] = useState<CreditCardProps>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: undefined, // Initialize focus as undefined or set to a valid Focused value
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, focus: evt.target.name as Focused }));
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default CreditCard;
