"use client";
import React from "react";
import styles from "./style.module.scss";

const Button = ({ isPrimary, title, onPress }) => {
  return (
    <div
      onClick={onPress}
      className={
        isPrimary
          ? styles.buttonContainerPrimary
          : styles.buttonContainerSecondary
      }
    >
      <div className={styles.titleStyle}>{title}</div>
    </div>
  );
};
export default Button;
