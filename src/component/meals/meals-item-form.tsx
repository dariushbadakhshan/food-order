import { ChangeEvent, FC, FormEvent, useState } from "react";
import useMealsItemStore from "../../store/meals-item-store";

type props = {
  item: { id: string; name: string; description: string; price: number };
};

const MealItemForm: FC<props> = ({ item }) => {
  const [enteredAmount, setEnteredAmount] = useState<number>(0);

  const addItem = useMealsItemStore((state) => state.addItem);

  const amountInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(Number(event.target.value));
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: enteredAmount,
    });

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
