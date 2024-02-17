import { IIdentifierProduct } from "../interfaces/IProduct";

interface IProductNameSort {
  setProducts: (sortedProducts: IIdentifierProduct[]) => void;
  products: IIdentifierProduct[];
  isSort: boolean;
  setIsSort: (isSort: boolean) => void;
}

const ProductNameSort = ({
  setProducts,
  products,
  isSort,
  setIsSort,
}: IProductNameSort) => {
  const onSort = () => {
    const sortedItems = products?.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const nameA = a.Name.toLowerCase();
      const nameB = b.Name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setIsSort(!isSort);
    setProducts(sortedItems);
  };

  return (
    <>
      <button onClick={onSort}>▲▼</button>
    </>
  );
};

export default ProductNameSort;
