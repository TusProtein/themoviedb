import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
}); 
  return <Component className={classes} {...props}>
    <span className={cx('title')}>{children}</span>
  </Component>;
}

export default Button;