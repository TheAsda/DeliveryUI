import React, { useContext, useEffect } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/GetPath.scss";
import { PointsContext } from "../App";
import { IPickPoint } from "../interfaces/PickPoint";

const GetPath = () => {
  const points: IPickPoint[] = useContext(PointsContext);

  return (
    <div className="path__page">
      <h1>Get path</h1>
      <div className="selection">
        <DropDownList
          label="Start point"
          style={{ backgroundColor: "#ffeb3b", width: "300px" }}
          data={points}
          dataItemKey="id"
          textField="address"
        />
        <DropDownList
          label="Finish point"
          style={{ backgroundColor: "#ffeb3b", width: "300px" }}
          data={points}
          dataItemKey="id"
          textField="address"
        />
        <Button>Get path</Button>
      </div>
    </div>
  );
};

export default GetPath;
