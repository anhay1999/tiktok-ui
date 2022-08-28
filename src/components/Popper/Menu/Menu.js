import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import { Fragment, useState } from "react";
import Header from "./Header.js";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const defaultFunction = () => {};
function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFunction,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  // console.log(history);
  const renderItems = () => {
    return (
      <Fragment>
        {current.data.map((item, index) => {
          const isParent = !!item.children;
          return (
            <MenuItem
              key={index}
              data={item}
              onClick={() => {
                if (isParent) {
                  setHistory((prev) => [...prev, item.children]);
                } else {
                  onChange(item);
                }
              }}
            />
          );
        })}
      </Fragment>
    );
  };
  return (
    <Tippy
      interactive={true}
      // visible={true}
      delay={[0, 700]}
      offset={[10, 10]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
export default Menu;
