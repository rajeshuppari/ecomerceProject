import React from "react";

import women_collection from "../component/assets/photos/womencollection";
import Items from "../popularwomen/Items";

const Womens = (props) => {
  return (
    <div className="mens">
      <div className="productlist">
        {women_collection.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
              handleClick={props.handleClick}
            ></Items>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Womens;
