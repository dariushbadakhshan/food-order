import CartIcon from "./header.navbar-cart-icon";

const Navbar = () => {
  return (
    <div>
      <div>
        <p>Omnia Food</p>
      </div>
      <div>
        <button>
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
