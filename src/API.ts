import { INewOrder, IExistingOrder, IOrderInfo } from "./interfaces/Order";
import { IPath } from "./interfaces/Path";
import { IPickPoint } from "./interfaces/PickPoint";
import { IDistrict } from "./interfaces/District";

const URL = "http://192.168.255.1:3000/";

export const placeOrder = (data: INewOrder) => {
  return new Promise<string>((res, rej) => {
    fetch(URL + "newOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then(jsonData => res(jsonData));
  });
};

export const payOrder = (orderID: string) => {
  return new Promise<string>((res, rej) => {
    fetch(URL + "pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ orderID })
    })
      .then(response => res(response.status.toString()))
      .catch(err => rej(err));
  });
};

export const closeOrder = (orderID: string) => {
  return new Promise<string>((res, rej) => {
    fetch(URL + "closeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ orderID })
    })
      .then(response => res(response.status.toString()))
      .catch(err => rej(err));
  });
};

export const getPath = ({ from, to }: { from: string; to: string }) => {
  return new Promise<IPath>((res, rej) => {
    fetch(URL + "path", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ from, to })
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then((jsonData: IPath) => res(jsonData));
  });
};

export const getPickPoints = () => {
  return new Promise<IPickPoint[]>((res, rej) => {
    fetch(URL + "pickPoints", {
      method: "GET"
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then(jsonData => {
        const result: IPickPoint[] = [];
        for (const key of Object.keys(jsonData)) {
          result.push({ id: key, address: jsonData[key] });
        }
        res(result);
      });
  });
};

export const getDistricts = () => {
  return new Promise<IDistrict[]>((res, rej) => {
    fetch(URL + "districts", {
      method: "GET"
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then(jsonData => {
        const result: IDistrict[] = [];
        for (const item of jsonData) {
          result.push({ name: item });
        }
        res(result);
      });
  });
};

export const getOrders = () => {
  return new Promise<IExistingOrder[]>((res, rej) => {
    fetch(URL + "orders", {
      method: "GET"
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then(jsonData => {
        const result: IExistingOrder[] = [];
        for (const item of jsonData) {
          result.push(item);
        }
        res(result);
      });
  });
};

export const getPaidOrders = ({
  district,
  date
}: {
  district: string;
  date: string;
}) => {
  const body = { district, date };
  return new Promise<IOrderInfo[]>((res, rej) => {
    fetch(URL + "getPaid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch(err => rej(err))
      .then(jsonData => {
        res(jsonData);
      });
  });
};
