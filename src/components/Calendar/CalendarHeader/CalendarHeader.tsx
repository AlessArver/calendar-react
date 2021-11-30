import React from "react";
import moment from "moment";
import Switch from "react-switch";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import s from "./CalendarHeader.module.sass";

import { CalendarViewEnum } from "../Calendar";
import clsx from "clsx";
import { useToggle } from "hooks/useToggle";

export type CalendarHeaderProps = {
  days: any[];
  today: moment.Moment;
  beforeHandler: () => void;
  todayHandler: () => void;
  nextHandler: () => void;
  onChangeCalendarView: (newDays: CalendarViewEnum) => void;
  isMonth: boolean;
};
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  days,
  today,
  beforeHandler,
  todayHandler,
  nextHandler,
  onChangeCalendarView,
  isMonth: isMonthData,
}) => {
  const isMonth = useToggle(isMonthData);
  const startDay = days[0];
  const endDay = days[days.length - 1];

  const handleCalendarView = (value: boolean) => {
    if (!value) {
      isMonth.onUnset();
      onChangeCalendarView(CalendarViewEnum.Week);
    } else {
      isMonth.onSet();
      onChangeCalendarView(CalendarViewEnum.Month);
    }
  };

  return (
    <div className={s.CalendarHeader}>
      <div className={s.CalendarHeaderCol}>
        <div className={s.CalendarHeaderMonth}>{today.format("MMMM")}</div>
        <div className={s.CalendarHeaderRange}>
          {moment(startDay).format("D MMMM")} -{" "}
          {moment(endDay).format("D MMMM")}
        </div>
      </div>
      <div className={s.CalendarHeaderCol}>
        <div onClick={beforeHandler} className={s.CalendarHeaderArrow}>
          <ArrowLeftIcon className={s.CalendarHeaderArrowIcon} />
        </div>
        <div onClick={todayHandler} className={s.CalendarHeaderToday}>
          Сегодня
        </div>
        <div onClick={nextHandler} className={s.CalendarHeaderArrow}>
          <ArrowRightIcon className={s.CalendarHeaderArrowIcon} />
        </div>
        <Switch
          onChange={handleCalendarView}
          checked={isMonth.value}
          onColor="#5860ff"
          uncheckedIcon={false}
          checkedIcon={false}
          className={s.CalendarHeaderSwitch}
        />
      </div>
    </div>
  );
};
