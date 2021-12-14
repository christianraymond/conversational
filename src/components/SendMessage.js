import React, { useState } from "react";
import firebase from "firebase";
import { Input, Button } from "@material-ui/core";
import { auth, db } from "../firebase";
const SendMessge = ({ scroll }) => {
  const [msg, setMsg] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            required
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
              fontWeight: "none",
            }}
            placeholder="Type message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          {/* Temporaty icons to be made functional */}
          <div className="icons">
            <i class="fas fa-plus-circle"></i>
            <i class="fas fa-paperclip"></i>
            <i class="fas fa-frown"></i>
          </div>
          <Button
            className="submitBtn"
            style={{
              background: "#df511d",
              color: "#fff",
              width: "5%",
              fontSize: "9px",
              margin: "14px 5% -13px 5%",
              maxWidth: "200px",
              textTransform: "Capitalize",
            }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessge;
