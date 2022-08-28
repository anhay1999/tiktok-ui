import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import images from "~/assets/images";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import FollowingAccounts from "~/components/FollowingAccounts";
import Discover from "~/components/Discover";
import Footer from "~/components/Footer";
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
      <SuggestedAccounts label="Suggested accounts" />
      <FollowingAccounts />
      <Discover />
      <Footer />
    </aside>
  );
}

export default Sidebar;
