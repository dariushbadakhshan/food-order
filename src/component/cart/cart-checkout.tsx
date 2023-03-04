import { FC } from "react";
import useMealsItemStore from "../../store/meals-item-store";

type props = {
  onClose: () => void;
};
const Checkout: FC<props> = ({ onClose }) => {
  const totalAmount = useMealsItemStore((state) => state.totalAmount);

  return (
    <div>
      <div>
        <h2>Total Amount</h2>

        <h2>{totalAmount} </h2>
      </div>
      <div>
        <button onClick={onClose}>Close</button>

        <button>Order</button>
      </div>
    </div>
  );
};
export default Checkout;
