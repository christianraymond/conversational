import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  return <div className="container">{user ? <Chat /> : <Login />}</div>;
};

export default App;
