import Button from "../../components/button/Button";

interface IAddProductProps {
  addProduct: () => void;
}

const AddProduct = (props: IAddProductProps) => {
  return (
    <>
      <Button buttonText="Add Product" onClick={props.addProduct} />
    </>
  );
};

export default AddProduct;
