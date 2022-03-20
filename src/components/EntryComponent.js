import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import AppState from "../context/app-state/AppState";

const EntryComponent = () => {
  return (
    <div className="bg-veryLightGray dark:bg-black text-lg font-josefinSans h-screen relative">
      <div
        className={`block md:hidden h-52 bg-no-repeat bg-cover bg-bgMobileLight dark:bg-bgMobileDark`}
      ></div>
      <div className="hidden md:block h-60 bg-no-repeat bg-cover bg-bgDesktopLight dark:bg-bgDesktopDark"></div>
      <div className="w-full absolute top-10">
        <div className="w-11/12 md:w-4/6 lg:w-2/4 m-auto">
          <Header />
          <AppState>
            <Main />
          </AppState>
        </div>
      </div>
    </div>
  );
};

export default EntryComponent;
