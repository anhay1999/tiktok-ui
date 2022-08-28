import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function FooterItem({ content }) {
  return (
    <div className={cx("FooterItem")}>
      <a className={cx("link")} href="/" target="_blank">
        {content}
      </a>
    </div>
  );
}

export default FooterItem;
