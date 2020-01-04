import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { closeOrder } from "../API";
import { Button } from "@progress/kendo-react-buttons";

const CloseOrder = () => {
  const close = (id: string) => {
    closeOrder(id);
  };
  return (
    <div className="pay">
      <h1>Close order</h1>
      <DropDownList label="Order" style={{ backgroundColor: "#ffeb3b" }} />
      <Button>Close</Button>
    </div>
  );
};

export default CloseOrder;
