"use client";
import React from "react";
import styles from "./style.module.scss";
const AuthTextInput = ({ value, onChangeText, label, isPassword }) => (
  <div className={styles.authInputContainer}>
    <div className={styles.authInputLabel}>{label}</div>
    <div className={styles.authInputWrapper}>
      <input
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        className={styles.authInputElement}
      />
    </div>
    {isPassword ? (
      <div className={styles.forgotLabel}>Forgot your password?</div>
    ) : null}
  </div>
);
const TextInput = ({ value, onChangeText, type, label, isPassword }) => {
  const renderInputLabel = () => {
    switch (type) {
      case "authInput":
        return (
          <AuthTextInput
            value={value}
            onChangeText={onChangeText}
            isPassword={isPassword}
            label={label}
          />
        );
    }
  };
  return <div className={styles.textInputContainer}>{renderInputLabel()}</div>;
};
export default TextInput;
