import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/home";
import AuthPage from "./pages/Auth";
import GamePage from "./pages/Gamepage";

function App() {
  const [count, setCount] = useState(0);

  return <AuthPage />;
}

export default App;
