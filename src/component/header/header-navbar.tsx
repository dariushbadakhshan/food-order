import CartIcon from "./header.navbar-cart-icon";
import useCart from "../../store/cart-store";

const Navbar = () => {
  const showCartModal = useCart((state) => state.showCartModal);

  const showCartHandler = () => {
    showCartModal();
  };

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
          <span>cart</span>
          <span>5</span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
