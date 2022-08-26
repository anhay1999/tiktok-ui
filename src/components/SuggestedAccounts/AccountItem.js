import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div>
      <Tippy
        interactive={true}
        // visible={true}
        delay={[800, 10]}
        offset={[-15, 2]}
        hideOnClick={true}
        placement="bottom"
        render={(attrs) => (
          <div className={cx("prev-view")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("popper")}>
              <AccountPreview />
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1661580000&x-signature=R1O7%2FEhSGNVHzEgkJcoZGd0eTkE%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>vtvcab.tintuc</strong>
              {/* <div className={cx("check")}> */}
              <FontAwesomeIcon
                className={cx("check-icon")}
                icon={faCheckCircle}
              />
              {/* </div> */}
            </p>
            <p className={cx("name")}>VTVcab Tin tức</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
// AccountItem.propTypes = {

// }
export default AccountItem;
