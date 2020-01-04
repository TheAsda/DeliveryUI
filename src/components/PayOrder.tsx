import React, { useContext, useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "../styles/PayOrder.scss";
import { payOrder } from "../API";
import { Button } from "@progress/kendo-react-buttons";
import { OrdersContext } from "../App";

const PayOrder = () => {
  const orders = useContext(OrdersContext)
    .filter(item => item.paid !== true)
    .map(item => ({ id: item.id, title: item.package.title }));
  const [orderId, setId] = useState<string>("");
  const pay = () => {
    payOrder(orderId);
  };
  return (
    <div className="pay">
      <h1>Pay order</h1>
      <DropDownList
        label="Order"
        style={{ backgroundColor: "#ffeb3b" }}
        data={orders}
        textField="title"
        dataItemKey="id"
        onChange={e => setId(e.target.value.id)}
      />
      <Button onClick={pay}>Pay</Button>
    </div>
  );
};

export default PayOrder;
