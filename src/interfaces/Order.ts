export interface IClient {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  passport: string;
}

export interface IPackage {
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
