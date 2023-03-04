import { FC } from "react";
import useMealsItemStore from "../../store/meals-item-store";

type props = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
const CartItem: FC<props> = ({ id, name, price, quantity }) => {
  const addItem = useMealsItemStore((state) => state.addItem);

  const removeItem = useMealsItemStore((state) => state.removeItem);

  const addItemHandler = () => {
    addItem({ id, name, price, quantity: 1 });
  };

  const removeItemHandler = () => {
    removeItem(id);
  };

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>x {quantity}</p>
      </div>
      <div>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
