import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = (props) => (
  <div className={classes.logo}>
    <img src={burgerLogo} alt="Burger" />
  </div>
);

export default Logo;
