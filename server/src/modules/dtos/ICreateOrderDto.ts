interface ICreateOrderDTO {
  OrderStatusId: number;
  UserId: string;
  Price: number;
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
