import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import RecommendListItem from "~/components/RecommendListItem";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <RecommendListItem />
      <RecommendListItem />
    </div>
  );
}

export default Home;
