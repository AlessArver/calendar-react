import { title } from "process";
import React from "react";
import { Link } from "react-router-dom";

import { CALENDAR_PAGE_ROUTE } from "routes/routesNames";

import s from "./Header.module.sass";

interface HeaderItem {
  title: string;
  path?: string;
}

const rightItems: HeaderItem[] = [
  { title: "calendar", path: CALENDAR_PAGE_ROUTE },
];

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={s.Header}>
      <div className={s.HeaderCol}></div>
      <div className={s.HeaderCol}>
        {rightItems.map((rightItem) =>
          rightItem.path ? (
            <Link
              key={rightItem.title}
              to={rightItem.path}
              className={s.HeaderItem}
            >
              {rightItem.title}
            </Link>
          ) : (
            <div key={rightItem.title} className={s.HeaderItem}>
              {rightItem.title}
            </div>
          )
        )}
      </div>
    </div>
  );
};
