import "./App.css";
import Products from "./products/Products";
import { getProducts, postProduct } from "./api/ProductApi";
import { IIdentifierProduct, IProduct } from "./interfaces/IProduct";
import AddProduct from "./products/AddProduct";
import AddProductDialogBox from "./products/AddProductDialogBox";
import { useState } from "react";

const App = () => {
  const [canShowDialog, setCanShowDialog] = useState(false);
  const [products, setProducts] = useState([] as IIdentifierProduct[]);

  const onAddProduct = (product: IProduct) => {
    postProduct(product).then(() =>
      getProducts().then((newProducts) => setProducts(newProducts))
    );
  };

  return (
    <>
      <div>
        <h3>Happy Shopping!</h3>
      </div>
      <AddProduct addProduct={() => setCanShowDialog(!canShowDialog)} />
      {canShowDialog && <AddProductDialogBox onAddProduct={onAddProduct} />}
      <Products products={products} setProducts={setProducts} />
    </>
  );
};

export default App;
