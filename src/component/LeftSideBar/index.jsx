"use client";
import React from "react";
import styles from "./style.module.scss";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";

const ChatRoutes = ({ routeName, icon }) => (
  <div className={styles.routerWrapperDiv}>
    {icon()}
    <div className={styles.routerDivText}>{routeName}</div>
  </div>
);
const DirectMessageCard = ({ profileColor, userName }) => (
  <div className={styles.directMessageWrapperDiv}>
    <div style={{ background: profileColor }} className={styles.chatProfileDiv}>
      <BsDiscord color="white" />
    </div>
    <div className={styles.userNameText}>{userName}</div>
  </div>
);
const LeftSideBar = () => {
  const routeNamesList = [
    { routeName: "Friends", icons: <FaUserFriends size={18} /> },
    { routeName: "Message Requests", icons: <MdOutlineMessage size={18} /> },
  ];
  const dmFriends = [
    { userName: "Anon", profileColor: "#faa619" },
    {
      userName: "jashan_shetty",
      profileColor: "blue",
    },
    { userName: "Anon", profileColor: "#faa619" },
    {
      userName: "jashan_shetty",
      profileColor: "blue",
    },
  ];
  return (
    <div className={styles.leftSideBarContainer}>
      <div className={styles.chatRoutesContainer}>
        {routeNamesList.map((x) => (
          <ChatRoutes
            icon={() => x.icons}
            key={x.routeName}
            routeName={x.routeName}
          />
        ))}
      </div>
      <div className={styles.sidebarTitle}>DIRECT MESSAGES</div>
      <div className={styles.directMessageContainer}>
        {dmFriends.map((x) => (
          <DirectMessageCard
            key={x.userName}
            userName={x.userName}
            profileColor={x.profileColor}
          />
        ))}
      </div>
    </div>
  );
};
export default LeftSideBar;
