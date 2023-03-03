import CartItem from "./cart-item";
import Checkout from "./cart-checkout";
import Modal from "../modal/modal";

const Cart = () => {
  return (
    <Modal>
      <CartItem />
      <Checkout />
    </Modal>
  );
};
export default Cart;
