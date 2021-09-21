interface IUpdateProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  weight: string;
  height: string;
  width: string;
  length: string;
  format: string;
  diameter: string;
}

export { IUpdateProductDto };
