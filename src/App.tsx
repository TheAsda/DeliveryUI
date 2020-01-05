import React, { createContext, useEffect, useState } from "react";
import PlaceOrder from "./components/PlaceOrder";
import PayOrder from "./components/PayOrder";
import CloseOrder from "./components/CloseOrder";
import GetPath from "./components/GetPath";
import GetPaid from "./components/GetPaid";
import { getPickPoints, getDistricts, getOrders } from "./API";
import "./styles/App.scss";
import { IPickPoint } from "./interfaces/PickPoint";
import { IDistrict } from "./interfaces/District";
import { IExistingOrder } from "./interfaces/Order";
export const PointsContext = createContext<IPickPoint[]>([]);
export const DistrictsContext = createContext<IDistrict[]>([]);
export const OrdersContext = createContext<IExistingOrder[]>([]);

const App = () => {
  const [points, setPoints] = useState<IPickPoint[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [orders, setOrders] = useState<IExistingOrder[]>([]);
  useEffect(() => {
    getPickPoints().then(res => setPoints(res));
    getDistricts().then(res => setDistricts(res));
    getOrders().then(res => setOrders(res));
  }, []);

  return (
    <OrdersContext.Provider value={orders}>
      <DistrictsContext.Provider value={districts}>
        <PointsContext.Provider value={points}>
          <div className="frame">
            <PlaceOrder />
            <PayOrder />
            <CloseOrder />
            <GetPath />
            <GetPaid />
          </div>
        </PointsContext.Provider>
      </DistrictsContext.Provider>
    </OrdersContext.Provider>
  );
};

export default App;
