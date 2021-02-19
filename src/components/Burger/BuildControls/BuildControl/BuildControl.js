import classes from "./BuildControl.css";

const BuildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.buildControl__label}>{props.label}</div>
    <button
      className={classes.buildControl__less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.buildControl__more} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
