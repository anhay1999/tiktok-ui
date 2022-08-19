import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import routesConfig from "~/config/routes";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    //handle
    console.log(menuItem);
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <Link to={routesConfig.home}>
            <img src={images.logo} alt="tiktok" />
          </Link>
        </div>
        {/* search */}
        <Search />
        {/* Action */}
        <div className={cx("actions")}>
          <Button text>
            <span>
              <img className={cx("plus-icon")} src={images.plus} alt="tiktok" />
            </span>
            <span className={cx("text-content")}>Upload</span>
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx("action-btn")}>
                  {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                  {/* <img src={images.messages} alt="messages" /> */}
                  {images.messages()}
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("action-btn", "inbox")}>
                  {/* <FontAwesomeIcon icon={faMessage} /> */}
                  {images.inbox()}
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7839f291976400e716828ee1a3b4f786~c5_720x720.jpeg?x-expires=1660690800&amp;x-signature=s%2FtNAMvoeZBbFiNT%2F%2B6dD1GkMFE%3D"
                alt="avatar"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
