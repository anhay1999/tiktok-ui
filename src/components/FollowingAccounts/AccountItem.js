import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1661580000&x-signature=R1O7%2FEhSGNVHzEgkJcoZGd0eTkE%3D"
        alt=""
      />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>vtvcab.tintuc</strong>
        </p>
        <p className={cx("name")}>VTVcab Tin tức</p>
      </div>
    </div>
  );
}

export default AccountItem;
