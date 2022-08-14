import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import { Fragment } from "react";
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return (
      <Fragment>
        {items.map((item, index) => {
          return <MenuItem key={index} data={item} />;
        })}
      </Fragment>
    );
  };
  return (
    <Tippy
      interactive={true}
      //   visible={true}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
