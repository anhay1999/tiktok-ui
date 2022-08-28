import classNames from "classnames/bind";
import styles from "./Discover.module.scss";
import images from "~/assets/images";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
function DiscoverItem({ content, type }) {
  return (
    <div className={cx("discover-item")}>
      <span className={cx("icon")}>
        {type === "hashtag" ? <images.Hashtag /> : <images.MusicNote />}
      </span>
      <p className={cx("content")}>{content}</p>
    </div>
  );
}
DiscoverItem.propTypes = {};
export default DiscoverItem;
