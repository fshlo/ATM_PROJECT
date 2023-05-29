import { CARD, CUSTOMER } from "./Types";

export const CUSOMER_LIST: CUSTOMER[] = [
  {
    id: 1,
    firstName: "Cleint11",
    lastName: "Cleint12",
    balance: 3000,
    allowedBalance: 1000,
    allowedNegative: false,
  },
  {
    id: 2,
    firstName: "Cleint21",
    lastName: "Cleint22",
    balance: 500,
    allowedBalance: 1000,
    allowedNegative: false,
  },
  {
    id: 3,
    firstName: "Cleint31",
    lastName: "Cleint32",
    balance: 700,
    allowedBalance: 1000,
    allowedNegative: true,
  },
];

export const CARD_LIST: CARD[] = [
  {
    id: 10,
    customerId: 1,
    date: new Date(2024, 0, 1),
    password: "1234",
  },
  {
    id: 20,
    customerId: 2,
    date: new Date(2023, 0, 1),
    password: "1234",
  },
  {
    id: 30,
    customerId: 3,
    date: new Date(2023, 6, 1),
    password: "1234",
  },
];
