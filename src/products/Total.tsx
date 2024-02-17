import { IIdentifierProduct } from "../interfaces/IProduct";

interface ITotal {
  totalProducts: IIdentifierProduct[];
}
const Total = (props: ITotal) => {
  const totalCost: Number = props.totalProducts?.reduce(
    (prev, total: IIdentifierProduct) => prev + total.Cost,
    0
  );
  return (
    <>
      <div>
        <strong>Total: </strong>
        {totalCost?.toFixed(2)}
      </div>
    </>
  );
};

export default Total;
