interface ICreateProductDTO {
  Id?: string;
  Name: string;
  Description: string;
  Price: number;
  CategoryId: string;
  Weight: string;
  Height: string;
  Width: string;
  Length: string;
  Format: string;
  Diameter: string;
  Img?: string;
  IsActive?: boolean;
}

export { ICreateProductDTO };
