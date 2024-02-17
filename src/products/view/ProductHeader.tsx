import { IHeader } from "../Products";
import { ReactNode } from "react";

export interface IProductProps {
  headers: IHeader[];
  children: ReactNode;
}

const ProductHeader = ({ headers, ...props }: IProductProps) => {
  return (
    <thead>
      <tr key="sno">
        {headers.map(({ name, includeSort }: IHeader) => (
          <td>
            <strong>{name}</strong>
            {includeSort && props.children}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default ProductHeader;
