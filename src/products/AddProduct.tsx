interface IAddProductProps {
  addProduct: () => void;
}

const AddProduct = (props: IAddProductProps) => {
  return (
    <>
      <button onClick={props.addProduct}>Add Product</button>
    </>
  );
};

export default AddProduct;
