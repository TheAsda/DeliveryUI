import React, { useContext, useEffect, useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/GetPath.scss";
import { PointsContext } from "../App";
import { IPickPoint } from "../interfaces/PickPoint";
import { getPath } from "../API";
import { IPath } from "../interfaces/Path";

const GetPath = () => {
  const points: IPickPoint[] = useContext(PointsContext);
  const [path, setPath] = useState<{ from: string; to: string }>({
    from: "",
    to: ""
  });
  const [data, setData] = useState<IPath>();

  const get = () => {
    getPath(path).then(res => {
      setData(res);
    });
  };
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
          onChange={e =>
            setPath(Object.assign(path, { from: e.target.value.id }))
          }
        />
        <DropDownList
          label="Finish point"
          style={{ backgroundColor: "#ffeb3b", width: "300px" }}
          data={points}
          dataItemKey="id"
          textField="address"
          onChange={e =>
            setPath(Object.assign(path, { to: e.target.value.id }))
          }
        />
        <Button onClick={get}>Get path</Button>
      </div>
      {data && (
        <div>
          <h2>Total distance: {data.totalDistance.toFixed(0)} km</h2>
          <h2>Total time: {data.totalTime.toFixed(0)} mins</h2>
          <div className="addresses">
            {data.path.map((address, i) => (
              <h3 className="address" key={i}>
                {`${i + 1}. ${address}`}
              </h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetPath;
