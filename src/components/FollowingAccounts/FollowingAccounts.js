import AccountItem from "./AccountItem";
import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";
const cx = classNames.bind(styles);
function FollowingAccounts() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Following accounts</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <div className={cx("see-all")}>
        <p className={cx("more-btn")}>See more</p>
      </div>
    </div>
  );
}

export default FollowingAccounts;
