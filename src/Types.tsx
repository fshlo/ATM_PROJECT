export type CARD = {
  id: number;
  customerId: number;
  date: Date;
  password: string;
};

export type CUSTOMER = {
  id: number;
  firstName: string;
  lastName: string;
  balance: number;
  allowedBalance: number;
  allowedNegative: boolean;
};
