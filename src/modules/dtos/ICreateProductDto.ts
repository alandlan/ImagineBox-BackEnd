interface ICreateProductDTO {
  Id?: string;
  Name: string;
  Description: string;
  Price: number;
  Img?: string;
  IsActive?: boolean;
}

export { ICreateProductDTO };
