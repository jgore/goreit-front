import {Address} from './bought/details/address';

export interface Account {

  userId: string;
  firstName: string;
  lastName: string;
  address: Address;
  createAt: string;
  balance: number;
}

