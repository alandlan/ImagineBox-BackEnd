interface ICreateUserTokenDTO {
  UserId: string;
  App: string;
  RefreshToken: string;
  ExpiresDate: Date;
}

export { ICreateUserTokenDTO };
