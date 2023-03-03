import "./App.css";
import Cart from "./component/cart/cart";
import Header from "./component/header/header";
import Meals from "./component/meals/meals";
import useCart from "./store/cart-store";

function App() {
  const showCart = useCart((state) => state.showCart);
  const closeCartModal = useCart((state) => state.showCartModal);
  const closeModalHandler = () => {
    closeCartModal();
  };
  return (
    <div className="App">
      {showCart && <Cart onClose={closeModalHandler} />}
      <Header />
      <Meals />
    </div>
  );
}

export default App;
