import classes from "./Button.css";

const Button = (props) => (
  <button
    onClick={props.clicked}
    className={[classes.button, classes[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);

export default Button;
