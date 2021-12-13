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
    <>
      <h4>
        Hey, please <i class="fas fa-hand-point-down"></i>
      </h4>
      &nbsp;
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
            background: "#4285F4",
            border: "none",
            color: "white",
          }}
          onClick={loginWithGoggle}
        >
          Login With Google to Chat!
        </Button>
      </div>
    </>
  );
};

export default Login;
