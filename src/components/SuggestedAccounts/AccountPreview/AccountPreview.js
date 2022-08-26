import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1661580000&x-signature=R1O7%2FEhSGNVHzEgkJcoZGd0eTkE%3D"
          alt=""
        />
        <Button primary className={cx("follow-btn")}>
          Follow
        </Button>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>vtvcab.tintuc</strong>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>VTVcab Tin tức</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Followers</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
