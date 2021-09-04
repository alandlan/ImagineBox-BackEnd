interface ICreateOrderItemDTO {
  OrderId: string;
  ProductId: string;
  Name: string;
  Quantity: number;
  Price: number;
}

export { ICreateOrderItemDTO };
