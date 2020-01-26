import React, { useContext, useState } from "react";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import "../styles/GetPaid.scss";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { DistrictsContext } from "../App";
import { getPaidOrders } from "../API";
import { IOrderInfo } from "../interfaces/Order";

const GetPaid = () => {
  const [date, setDate] = useState<Date | null>();
  const [district, setDistrict] = useState<string>("");
  const [data, setData] = useState();
  const districts = useContext(DistrictsContext);
  const get = () => {
    getPaidOrders({
      district,
      date: date
        ? `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
        : ""
    }).then(res => {
      console.log(res);

      setData(res);
    });
  };
  return (
    <div className="get__paid">
      <h1>Get paid orders by district and date</h1>
      <div className="selection">
        <DropDownList
          style={{ backgroundColor: "#ffeb3b" }}
          data={districts}
          dataItemKey="name"
          textField="name"
          onChange={e => setDistrict(e.target.value.name)}
        />
        <DatePicker onChange={e => setDate(e.target.value)} />
        <Button onClick={get}>Get orders</Button>
      </div>
      {data && (
        <div className="orders">
          {data.map((item: IOrderInfo) => {
            return (
              <div className="order__info" key={item.data._id}>
                <h2>Dates</h2>
                <div>
                  <h3 key={item.data.adoption_date}>
                    Adoption date:{" "}
                    {new Date(item.data.adoption_date).toDateString()}
                  </h3>
                  {item.data.recieve_date && (
                    <h3>
                      Recieve date:{" "}
                      {new Date(item.data.recieve_date).toDateString()}
                    </h3>
                  )}
                </div>
                <h2>Path</h2>
                <div>
                  <h3>
                    Total distance: {item.path.totalDistance.toFixed(0)} km
                  </h3>
                  <h3>Total time: {item.path.totalTime.toFixed(0)} mins</h3>
                  <h3>Start point: {item.path.path[0]}</h3>
                  <h3>
                    End point: {item.path.path[item.path.path.length - 1]}
                  </h3>
                </div>
                <h2>Sender</h2>
                <div>
                  <h3>First name: {item.sender.first_name}</h3>
                  <h3>Last name: {item.sender.last_name}</h3>
                </div>
                <h2>Consignee</h2>
                <div>
                  <h3>First name: {item.consignee.first_name}</h3>
                  <h3>Last name: {item.consignee.last_name}</h3>
                </div>
                <h2>Package</h2>
                <div>
                  <h3>Title: {item.package.title}</h3>
                  <h3>Description: {item.package.description}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetPaid;
