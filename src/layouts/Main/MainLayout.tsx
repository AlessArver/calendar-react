import React from "react";

import s from "./MainLayout.module.sass";

import { Header } from "components/Header/Header";

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={s.MainLayout}>
      <Header />
      <div className={s.MainLayoutChildren}>{children}</div>
    </div>
  );
};
