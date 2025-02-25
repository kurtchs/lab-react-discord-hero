import "./App.css";
import Body from "./components/body";
import img from "./assets/discord-background.png";
import Header from "./components/header";
import Menu from "./components/menu";
import ButtonWhite from "./components/ButtonWhite";
import ButtonBlack from "./components/ButtonBlack";

function App() {
  return (
    <div>
      <Menu />
      <Header />

      <div className="App"></div>

      <Body />
      <ButtonWhite />

      <ButtonBlack />
      <img
        src={img}
        alt=""
        style={{ position: "absolute", top: 630, left: 390 }}
      />
    </div>
  );
}

export default App;
