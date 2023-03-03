import "./App.css";
import Cart from "./component/cart/cart";
import Header from "./component/header/header";
import Meals from "./component/meals/meals";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Meals />
    </div>
  );
}

export default App;
