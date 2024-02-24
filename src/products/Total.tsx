import { IIdentifierProduct } from "../interfaces/IProduct";

interface ITotal {
  totalProducts: IIdentifierProduct[];
}
const Total = (props: ITotal) => {
  const totalCost: Number = props.totalProducts?.reduce(
    (prev, total: IIdentifierProduct) => prev + Number(total.Cost),
    0
  );
  return (
    <>
      <strong>Total: </strong>
      {totalCost?.toFixed(2)}
    </>
  );
};

export default Total;
