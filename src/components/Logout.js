import React from "react";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";

const Logout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FFC0C7",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <Button
        style={{
          padding: "10px",
          fontSize: "10px",
          borderRadius: "0",
          textAlign: 'right'
        }}
        onClick={() => auth.signOut()}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
