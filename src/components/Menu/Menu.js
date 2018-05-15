import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {


  const menu_items = props.menuItems.map(menu_item =>
      <li key={menu_item.id}>
        <Link to={menu_item.path}>
        {menu_item.text}
        </Link>
      </li>
  );


  return (
      <div className='Menu'>
        <ul>
          {menu_items}
        </ul>
      </div>

  );
};

export default Menu;