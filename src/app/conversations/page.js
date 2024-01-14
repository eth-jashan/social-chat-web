import LeftSideBar from "@/component/LeftSideBar";
import styles from "./style.module.scss";

export default function Conversation() {
  return (
    <div className={styles.conversationContainerScreen}>
      <div className={styles.chatListSidebarWrapper}>
        <LeftSideBar />
      </div>
      <div className={styles.mainChatScreenWrapper}></div>
      <div className={styles.chatAccountInfoSidebarWrapper}></div>
    </div>
  );
}
