import React from "react";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <a>Place order</a>
      </li>
      <li>
        <a>Pay order</a>
      </li>
      <li>
        <a>Close order</a>
      </li>
      <li>
        <a>Get path</a>
      </li>
      <li>
        <a>Get paid orders</a>
      </li>
    </ul>
  );
};

export default Menu;
