import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";

const Landing = () => {
  return (
    <>
      <Header />
      <Main />
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default Landing;
