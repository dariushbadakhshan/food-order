import { FC } from "react";
import CartItem from "./cart-item";
import Checkout from "./cart-checkout";
import Modal from "../modal/modal";

type props = {
  onClose: () => void;
};
const Cart: FC<props> = ({ onClose }) => {
  return (
    <Modal closeModal={onClose}>
      <CartItem />
      <Checkout onClose={onClose} />
    </Modal>
  );
};
export default Cart;
