import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";

const Login = () => {
  function loginWithGoggle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          fontSize: "16px",
          background: "#f4511e",
          border: "none",
          color: "white",
        }}
        onClick={loginWithGoggle}
      >
        Login With Google to Chat!
      </Button>
    </div>
  );
};

export default Login;
