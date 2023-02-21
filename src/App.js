import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./component/Login/Login";
import Chat from "./component/Chat/Chat";
import Home from "./component/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
