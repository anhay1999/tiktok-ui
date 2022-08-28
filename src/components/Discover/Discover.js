import classNames from "classnames/bind";
import styles from "./Discover.module.scss";
import DiscoverItem from "./DiscoverItem";
const cx = classNames.bind(styles);
const DiscoverData = [
  {
    content: "suthatla",
    type: "hashtag",
  },
  {
    content: "mackedoi",
    type: "hashtag",
  },
  {
    content: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n",
    type: "music-note",
  },
];
function Discover() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Discover</p>
      <div className={cx("inner")}>
        {DiscoverData.map((data, index) => {
          return (
            <DiscoverItem
              key={data.content}
              content={data.content}
              type={data.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
