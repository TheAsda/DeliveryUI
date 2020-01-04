import React, { useContext } from "react";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import "../styles/GetPaid.scss";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { DistrictsContext } from "../App";

const GetPaid = () => {
  const districts = useContext(DistrictsContext);
  return (
    <div className="get__paid">
      <h1>Get paid orders by district and date</h1>
      <div>
        <DropDownList
          style={{ backgroundColor: "#ffeb3b" }}
          data={districts}
          dataItemKey="name"
          textField="name"
        />
        <DatePicker />
        <Button>Get orders</Button>
      </div>
    </div>
  );
};

export default GetPaid;
