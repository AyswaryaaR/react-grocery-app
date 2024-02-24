import Button from "../components/button/Button";

interface IProductNameSort {
  onSort: () => void;
}

const ProductNameSort = ({ onSort }: IProductNameSort) => {
  return (
    <>
      <Button onClick={onSort} buttonText="▲▼" />
    </>
  );
};

export default ProductNameSort;
