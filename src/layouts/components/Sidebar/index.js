import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<images.Home />}
          activeIcon={<images.ActiveHome />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<images.UserGroup />}
          activeIcon={<images.ActiveUserGroup />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<images.Live />}
          activeIcon={<images.ActiveLive />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
