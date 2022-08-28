import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import Button from "../Button";
import styles from "./RecommendListItem.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function RecommendListItem() {
  return (
    <div className={cx("recommend-list-item-container")}>
      <Link to="/">
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6dff14bc8660b9071fe5f6f844420237~c5_100x100.jpeg?x-expires=1661695200&x-signature=n6hJoO8a1xBhECkF0QsYXuKA4YM%3D"
          alt=""
        />
      </Link>
      <div className={cx("content-container")}>
        <div className={cx("info")}>
          <div className={cx("author")}>
            <Link to="/" className={cx("author-link")}>
              <h3 className={cx("name")}>jax5trieu</h3>
              <h4 className={cx("nick-name")}>Jax 5 triệu</h4>
            </Link>
          </div>
          <Button outline className={cx("follow-btn")}>
            Follow
          </Button>
          <div className={cx("video-description")}>
            <span>Điều cần có trong đời - Chính là Vật Chất!</span>
            <span> </span>
            <Link to="/">
              <strong>#fyp</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#xuhuong</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#leagueoflegends</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#lmht</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#lol</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#gamernextgen</strong>
            </Link>
            <span> </span>
            <Link to="/">
              <strong>#boxstudio</strong>
            </Link>
          </div>
          <h4 className={cx("video-music")}>
            <images.MusicNote className={cx("svg-icon")} />
            ai rồi cũng bỏ anh đi - VoVanDuc
          </h4>
        </div>

        <div className={cx("video-part")}>
          <div className={cx("video-container")}>
            <video
              className={cx("video")}
              controls
              src="https://v16-webapp.tiktok.com/30a1a012318b6a7926a95fbfa30f4888/6309d89d/video/tos/maliva/tos-maliva-ve-0068c799-us/5add0efc03744331998ac8dbf8571edc/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1990&bt=995&cs=0&ds=3&ft=eXd.6Hk_Myq8ZKT20he2NYdUml7Gb&mime_type=video_mp4&qs=0&rc=aTY6ZWc7ZjU8OjczOjs7NkBpM3U6cjo6Znk6ZTMzZzczNEBiX2I0MmEzNl8xYy82MDFiYSNjbi0xcjRnbGxgLS1kMS9zcw%3D%3D&l=20220827024049010245019106140BBFCE&btag=80000"
            ></video>
          </div>

          <div className={cx("action-container")}>
            <Button>
              <span className={cx("action-button")}>
                <span className={cx("action-button-icon")}>
                  <images.HeartIcon />
                </span>
                <strong className={cx("like-count", { count: true })}>
                  90.4K
                </strong>
              </span>
            </Button>

            <Button className={cx("button")}>
              <span className={cx("action-button")}>
                <span className={cx("action-button-icon")}>
                  <images.CommentIcon />
                </span>
                <strong className={cx("comment-count", { count: true })}>
                  90.4K
                </strong>
              </span>
            </Button>
            <Button className={cx("button")}>
              <span className={cx("action-button")}>
                <span className={cx("action-button-icon")}>
                  <images.ShareIcon />
                </span>
                <strong className={cx("share-count", { count: true })}>
                  90.4K
                </strong>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendListItem;
