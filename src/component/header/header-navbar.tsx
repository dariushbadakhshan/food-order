import CartIcon from "./header.navbar-cart-icon";
import useCart from "../../store/cart-store";
import useMealsItemStore from "../../store/meals-item-store";

const Navbar = () => {
  const showCartModal = useCart((state) => state.showCartModal);

  const items = useMealsItemStore((state) => state.items);

  const showCartHandler = () => {
    showCartModal();
  };

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return (currentNumber += item.quantity);
  }, 0);

  return (
    <div>
      <div>
        <p>Omnia Food</p>
      </div>
      <div>
        <button onClick={showCartHandler}>
          <span>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span>{numberOfCartItems} </span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
