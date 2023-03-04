import { FC } from "react";
import CartItem from "./cart-item";
import Checkout from "./cart-checkout";
import Modal from "../modal/modal";
import useMealsItemStore from "../../store/meals-item-store";

type props = {
  onClose: () => void;
};
const Cart: FC<props> = ({ onClose }) => {
  const items = useMealsItemStore((state) => state.items);

  const cartItem = items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
    />
  ));

  return (
    <Modal closeModal={onClose}>
      <ul>{cartItem}</ul>
      <Checkout onClose={onClose} />
    </Modal>
  );
};
export default Cart;
