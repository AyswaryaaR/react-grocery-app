import "./App.css";
import Products, { products } from "./products/Products";

const App = () => {
  return (
    <>
      <div>
        <h3>Happy Shopping!</h3>
      </div>
      <Products products={products} />
    </>
  );
};

export default App;
