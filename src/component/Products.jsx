import React from "react";

const Products = ({ name, price, color, data = {} }) => {
  return (
    <>
      <div className="product">
        <h2>Brand: {name}</h2>
        <h3>Price: {price}</h3>
        <h4>Color: {color}</h4>
        {data.ram && (
          <>
            <p>Ram: {data.ram}</p>
            <p>Rom: {data.rom}</p>
            <p>Chipset: {data.chip}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
