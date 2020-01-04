import React, { useContext, useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { closeOrder } from "../API";
import { Button } from "@progress/kendo-react-buttons";
import { OrdersContext } from "../App";

const CloseOrder = () => {
  const orders = useContext(OrdersContext)
    .filter(item => item.status !== "closed" && item.paid === true)
    .map(item => ({ id: item.id, title: item.package.title }));
  const [orderId, setId] = useState<string>("");

  const close = () => {
    console.log(orderId);
    closeOrder(orderId);
  };

  return (
    <div className="pay">
      <h1>Close order</h1>
      <DropDownList
        label="Order"
        style={{ backgroundColor: "#ffeb3b" }}
        data={orders}
        textField="title"
        dataItemKey="id"
        onChange={e => setId(e.target.value.id)}
      />
      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default CloseOrder;
