import { ChangeEvent, FormEvent, useState } from "react";

const MealItemForm = () => {
  const [enteredAmount, setEnteredAmount] = useState<number>(0);

  const amountInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEnteredAmount(Number(event.target.value));
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setEnteredAmount(0);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="add-meal">Amount</label>
      <input
        id="add-meal"
        onChange={amountInputChangeHandler}
        value={enteredAmount > 0 ? enteredAmount : ""}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
