import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import FooterItem from "./FooterItem";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <FooterItem content="About" />
      <span className={cx("copy-right")}>© 2022 TikTok</span>
    </div>
  );
}

export default Footer;
