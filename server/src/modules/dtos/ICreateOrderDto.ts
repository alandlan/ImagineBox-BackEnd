interface ICreateOrderDTO {
  OrderStatusId: number;
  UserId: string;
  PriceProducts: number;
  PriceFreight: number;
  PriceTotal: number;
  ExpectedDate: Date;
  PostalCode: string;
  StreetName: string;
  Number: string;
  Complement: string;
  Neighborhood: string;
  City: string;
  State: string;
}

export { ICreateOrderDTO };
