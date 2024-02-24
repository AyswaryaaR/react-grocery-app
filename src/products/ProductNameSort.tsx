interface IProductNameSort {
  onSort: () => void;
}

const ProductNameSort = ({ onSort }: IProductNameSort) => {
  return (
    <>
      <button onClick={onSort}>▲▼</button>
    </>
  );
};

export default ProductNameSort;
