export interface IProduct {
  Description: string;
  Quantity: string;
  Unit: string;
  Price: string;
  CostPerUnit: string;
  Iva: string;
  Date: string;
  Location: string;
  Store: string;
}
export interface IAddProductDialogBox {
  onAddProduct: (product: IProduct) => void;
}
export interface IIdentifier {
  id: string;
}

export interface IIdentifierProduct extends IProduct, IIdentifier {}
