import "./App.css";
import Products from "./products/Products";
import { getProducts, postProduct } from "./api/ProductApi";
import { IProduct, IIdentifierProduct } from "./interfaces/IProduct";
import AddProduct from "./products/AddProduct";
import AddProductDialogBox from "./products/AddProductDialogBox";
import { useState, useEffect } from "react";

const App = () => {
  const [canShowDialog, setCanShowDialog] = useState(false);
  const [products, setProducts] = useState([] as IIdentifierProduct[]);
  const onAddProduct = (product: IProduct) => {
    postProduct(product).then(() =>
      getProducts().then((products) => setProducts(products))
    );
  };
  useEffect(() => {
    getProducts().then((products: IIdentifierProduct[]) => {
      console.log(products);
      setProducts(products);
    });
  }, []);
  return (
    <>
      <div>
        <h3>Happy Shopping!</h3>
      </div>
      <AddProduct addProduct={() => setCanShowDialog(true)} />
      {canShowDialog && <AddProductDialogBox onAddProduct={onAddProduct} />}
      <Products products={products} />
    </>
  );
};

export default App;
