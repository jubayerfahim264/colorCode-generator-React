import React from "react";

const Items = () => {
  const age = 17;
  const CreaditCard = true;
  const Gmail = true;

  return (
    <>
      {CreaditCard && (
        <>
          <h2>You can withdraw money from ATM</h2>
        </>
      )}
      {Gmail && (
        <>
          <h2>You can login FB Account</h2>
        </>
      )}
      {age >= 18 ? (
        <>
          <h2>U are a adult</h2>
        </>
      ) : (
        <>
          <h2>Go to ur Mommy</h2>
        </>
      )}
    </>
  );
};

export default Items;
