import React from "react";
import Products from "./component/Products";
import Items from "./component/Items";
import Events from "./component/Events";
import Practice from "./component/Practice";

const App = () => {
  // const MyID = {
  //   name: "Jubayer Fahim",
  //   village: "Puran Singchapoir",
  //   PS: "Chhatak",
  //   Distric: "Sunam Ganj",
  //   ContactNumber: "0" + 1306952094,
  //   email: "jubayerf@gmail.com",
  // };
  // const item = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const fruits = [];
  // for (let i = 0; i < item.length; i++) {
  //   fruits.push(<div key={i}>Friuts Items: {item[i]}</div>);
  // }

  // const obj = {
  //   ram: "4GB",
  //   rom: "128GB",
  //   chip: "Android 13",
  // };

  return (
    <>
      <div className="main">
        {/* <Products
          name={"Samsung S25 ULTRA"}
          price={"$450"}
          color={"Aish"}
          data={obj}
        />
        <Products name={"Samsung S24 PRO"} price={"$550"} color={"White"} />
        <Products name={"Samsung S20"} price={"$350"} color={"Grown Black"} /> */}
        {/* <Items /> */}
        {/* <Events /> */}
        <Practice />
      </div>
    </>
  );
};

export default App;
