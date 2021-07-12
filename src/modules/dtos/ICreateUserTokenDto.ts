interface ICreateUserTokenDTO {
  UserId: string;
  App: string;
  RefreshToken: string;
  ExpiresDate: string;
}

export { ICreateUserTokenDTO };
