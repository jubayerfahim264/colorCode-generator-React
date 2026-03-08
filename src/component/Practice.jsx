import React from "react";
import { Card, CardHeader } from "react-bootstrap";

const Practice = () => {
  return (
    <>
      <div className="container border p-3">
        <Card style={{ maxWidth: 450 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderColor: "black",
              padding: 20,
            }}
          >
            <img
              src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
              style={{ width: "100%", height: "100%", position: "relative" }}
            />
          </div>
          <CardHeader>Jubayer Fahim</CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Practice;
