import React from "react";
import "moment/locale/ru";
import moment from "moment";

import { AppRoutes } from "routes";

moment.updateLocale("ru", {
  week: { dow: 0 },
  calendar: {
    lastDay: "[вчера]",
    sameDay: "[сегодня]",
    nextDay: "[завтра]",
    lastWeek: "[прошлая неделя]",
    nextWeek: "[следующая неделя]",
    sameElse: "L",
  },
});

export const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};
