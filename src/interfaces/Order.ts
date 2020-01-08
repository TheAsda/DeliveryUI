import { IPath } from "./Path";

export interface IClient {
  _id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  passport: string;
}

export interface IPackage {
  _id?: string;
  title: string;
  description: string;
  weight: number;
  dimentions: [number, number, number];
}

export interface INewOrder {
  sender: IClient;
  consignee: IClient;
  from: string;
  to: string;
  package: IPackage;
}

export interface IExistingOrder {
  id: string;
  paid: boolean;
  status: string;
  package: IPackage;
}

export interface IOrderInfo {
  data: {
    _id: string;
    adoption_date: string;
    recieve_date: string;
    sender: string;
    consignee: string;
    from: string;
    to: string;
    package: string;
    status: string;
    paid: boolean;
  };
  path: IPath;
  consignee: {
    first_name: string;
    last_name: string;
  };
  sender: {
    first_name: string;
    last_name: string;
  };
  package: IPackage;
}
