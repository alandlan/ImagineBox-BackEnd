interface IDateProvider {
  ConvertToUTC(date: Date): string;
  DateNow(): Date;
  CompareInDays(start_date: Date, end_date: Date): number;
  AddDays(Days: number): Date;
}

export { IDateProvider };
