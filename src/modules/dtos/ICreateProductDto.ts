interface ICreateProductDTO {
  Id?: string;
  Name: string;
  Description: string;
  Price: number;
  CategoryId: string;
  Img?: string;
  IsActive?: boolean;
}

export { ICreateProductDTO };
