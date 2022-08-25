import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  text,
  children,
  onClick,
  small,
  large,
  disabled,
  rounded,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };
  if (disabled) {
    Object.keys(props).forEach((Key) => {
      if (Key.startsWith("on") && typeof props[Key] === "function") {
        delete props[Key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [className]: className,
  });
  // console.log(classes);
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("titles")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  // ...passProps: PropTypes.string
};
export default Button;
