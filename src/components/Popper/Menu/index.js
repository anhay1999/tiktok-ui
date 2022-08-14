import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import { Fragment, useState } from "react";
import Header from "./Header.js";
const cx = classNames.bind(styles);
const defaultFunction = () => {};
function Menu({ children, items = [], onChange = defaultFunction }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
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
      visible={true}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
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
