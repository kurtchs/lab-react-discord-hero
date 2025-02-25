import App from "../App";
import logo from "../assets/discord-logo-white.png";

function Header() {
  return (
    <>
      <img
        src={logo}
        alt=""
        width="100px"
        style={{ position: "absolute", top: 30, left: 30 }}
      />
    </>
  );
}
export default Header;
