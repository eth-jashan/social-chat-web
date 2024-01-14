import styles from "./style.module.scss";
import Image from "next/image";
import DiscordAuthBgImage from "../../../assets/discordAuthWallpaper.png";
import AuthPopup from "@/component/AuthPopups/index";

export default function Login() {
  return (
    <div className={styles.loginContainerScreen}>
      {/* <Image alt="" src={DiscordAuthBgImage} className={styles.imageBg} /> */}
      <AuthPopup />
    </div>
  );
}
