export interface IProduct {
  Name: string;
  Quantity: string;
  Cost: string;
  ShopName: string;
}
export interface IAddProductDialogBox {
  onAddProduct: (product: IProduct) => void;
}
export interface IIdentifier {
  id: string;
}

export interface IIdentifierProduct extends IProduct, IIdentifier {}
