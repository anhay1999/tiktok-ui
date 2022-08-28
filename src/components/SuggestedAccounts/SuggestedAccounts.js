import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from "prop-types";
import AccountItem from "./AccountItem";
const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <div className={cx("see-all")}>
        <p className={cx("more-btn")}>See all</p>
      </div>
    </div>
  );
}
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
