import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
  let _icon = icon;
  return (
    <NavLink
      className={(nav) => {
        return cx("menu-item", {
          active: nav.isActive,
        });
      }}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}
MenuItem.propTypes = {
  title: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};
export default MenuItem;
