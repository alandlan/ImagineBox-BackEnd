interface ICreateUserAddressDTO {
  Id?: string;
  UserId: string;
  Description: string;
  PostalCode: string;
  Number: string;
  Complement: string;
  Neighborhood: string;
  City: string;
  State: string;
}

export { ICreateUserAddressDTO };
