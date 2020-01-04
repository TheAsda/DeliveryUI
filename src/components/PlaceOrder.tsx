import React, { useState, useContext } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { IClient, IPackage, INewOrder } from "../interfaces/Order";
import { placeOrder } from "../API";
import "../styles/PlaceOrder.scss";
import { PointsContext } from "../App";
import { IPickPoint } from "../interfaces/PickPoint";

const PlaceOrder = () => {
  const points: IPickPoint[] = useContext(PointsContext);

  const [sender, setSender] = useState<IClient>({} as IClient);
  const [consignee, setConsignee] = useState<IClient>({} as IClient);
  const [pack, setPack] = useState<IPackage>({
    dimentions: [0, 0, 0]
  } as IPackage);
  const [addresses, setAddresses] = useState<{ from: string; to: string }>({
    from: "",
    to: ""
  });
  const submit = () => {
    const data: INewOrder = {
      sender,
      consignee,
      from: addresses.from,
      to: addresses.to,
      package: pack
    };
    placeOrder(data);
  };
  return (
    <div className="order">
      <h1>Close order</h1>
      <div className="clients">
        <div className="client">
          <h2>Sender</h2>
          <Input
            label="First name"
            onChange={e =>
              setSender(Object.assign(sender, { firstName: e.target.value }))
            }
          />
          <Input
            label="Last name"
            onChange={e =>
              setSender(Object.assign(sender, { lastName: e.target.value }))
            }
          />
          <Input
            label="Phone number"
            onChange={e =>
              setSender(Object.assign(sender, { phone: e.target.value }))
            }
          />
          <Input
            label="Email"
            onChange={e =>
              setSender(Object.assign(sender, { email: e.target.value }))
            }
          />
          <Input
            label="Passport"
            onChange={e =>
              setSender(Object.assign(sender, { passport: e.target.value }))
            }
          />
        </div>
        <div className="client">
          <h2>Consignee</h2>
          <Input
            label="First name"
            onChange={e =>
              setConsignee(
                Object.assign(consignee, { firstName: e.target.value })
              )
            }
          />
          <Input
            label="Last name"
            onChange={e =>
              setConsignee(
                Object.assign(consignee, { lastName: e.target.value })
              )
            }
          />
          <Input
            label="Phone number"
            onChange={e =>
              setConsignee(Object.assign(consignee, { phone: e.target.value }))
            }
          />
          <Input
            label="Email"
            onChange={e =>
              setConsignee(Object.assign(consignee, { email: e.target.value }))
            }
          />
          <Input
            label="Passport"
            onChange={e =>
              setConsignee(
                Object.assign(consignee, { passport: e.target.value })
              )
            }
          />
        </div>
      </div>
      <div className="points">
        <div>
          <h2>Departure point</h2>
          <DropDownList
            style={{ backgroundColor: "#ffeb3b", width: "300px" }}
            onChange={e =>
              setAddresses(
                Object.assign(addresses, { from: e.target.value.id })
              )
            }
            data={points}
            dataItemKey="id"
            textField="address"
          />
        </div>
        <div>
          <h2>Destination point</h2>
          <DropDownList
            style={{ backgroundColor: "#ffeb3b", width: "300px" }}
            onChange={e =>
              setAddresses(Object.assign(addresses, { to: e.target.value.id }))
            }
            data={points}
            dataItemKey="id"
            textField="address"
          />
        </div>
      </div>
      <div className="package">
        <h2>Package</h2>
        <div>
          <Input
            label="Title"
            onChange={e =>
              setPack(Object.assign(pack, { title: e.target.value }))
            }
          />
          <Input
            label="Description"
            onChange={e =>
              setPack(Object.assign(pack, { description: e.target.value }))
            }
          />
          <Input
            label="Weight"
            type="number"
            min="0"
            style={{ width: "100px" }}
            onChange={e =>
              setPack(Object.assign(pack, { weight: e.target.value }))
            }
          />
          <div>
            <h3>Dimentions</h3>
            <Input
              label="length"
              type="number"
              min="0"
              className="dimention"
              style={{ width: "100px" }}
              onChange={e =>
                setPack(
                  Object.assign(pack, {
                    dimentions: [
                      e.target.value,
                      pack.dimentions[1],
                      pack.dimentions[2]
                    ]
                  })
                )
              }
            />
            <Input
              label="width"
              type="number"
              min="0"
              className="dimention"
              style={{ width: "100px" }}
              onChange={e =>
                setPack(
                  Object.assign(pack, {
                    dimentions: [
                      pack.dimentions[0],
                      e.target.value,
                      pack.dimentions[2]
                    ]
                  })
                )
              }
            />
            <Input
              label="height"
              type="number"
              min="0"
              className="dimention"
              style={{ width: "100px" }}
              onChange={e =>
                setPack(
                  Object.assign(pack, {
                    dimentions: [
                      pack.dimentions[0],
                      pack.dimentions[1],
                      e.target.value
                    ]
                  })
                )
              }
            />
          </div>
        </div>
      </div>
      <Button onClick={submit} style={{ gridArea: "submit" }}>
        Submit
      </Button>
    </div>
  );
};

export default PlaceOrder;
