import {Address} from './address';

export interface Account {

  userId: string;
  firstName: string;
  lastName: string;
  address: Address;
  createAt: string;
}

