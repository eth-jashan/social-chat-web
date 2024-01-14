"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import TextInput from "../TextInput";
import Button from "../Button";
const LoginForm = ({ setIsLogin }) => (
  <div className={styles.loginFormContainer}>
    <div className={styles.loginFormTitle}>Welcome Back!</div>
    <div className={styles.loginFormSubTitle}>
      We are excited to see you again
    </div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput type={"authInput"} label={"EMAIL ADDRESS"} />
    </div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput isPassword type={"authInput"} label={"PASSWORD"} />
    </div>
    <div className={styles.loginButtonWrapper}>
      <Button isPrimary={true} title={"Log In"} />
      <div className={styles.btnSecondaryText}>
        Need an account?
        <div
          onClick={() => setIsLogin(false)}
          className={styles.btnSecondaryRegisterText}
        >
          {" "}
          Register
        </div>
      </div>
    </div>
  </div>
);
const RegisterForm = ({ setIsLogin }) => (
  <div className={styles.loginFormContainer}>
    <div className={styles.loginFormTitle}>Create an account!</div>
    <div className={styles.loginFormSubTitle}>Do not miss out on the app</div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput type={"authInput"} label={"EMAIL ADDRESS"} />
    </div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput isPassword={false} type={"authInput"} label={"DISPLAY NAME"} />
    </div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput isPassword={false} type={"authInput"} label={"PASSWORD"} />
    </div>
    <div className={styles.loginFormInputWrapper}>
      <TextInput
        isPassword={false}
        type={"authInput"}
        label={"RE-ENTRY PASSWORD"}
      />
    </div>
    <div className={styles.loginButtonWrapper}>
      <Button isPrimary={true} title={"Continue"} />
      <div className={styles.btnSecondaryText}>
        Already have an account?
        <div
          onClick={() => setIsLogin(true)}
          className={styles.btnSecondaryRegisterText}
        >
          {" "}
          Login
        </div>
      </div>
    </div>
  </div>
);
const AuthPopup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.authPopupContainer}>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
};
export default AuthPopup;
