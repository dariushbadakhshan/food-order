import { FC } from "react";
import useCart from "../../store/cart-store";

type props = {
  onClose: () => void;
};
const Checkout: FC<props> = ({ onClose }) => {
  return (
    <div>
      <div>
        <h2>Total Amount</h2>
        <h2>totalPrice</h2>
      </div>
      <div>
        <button onClick={onClose}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};
export default Checkout;
