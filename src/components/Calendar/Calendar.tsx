import { useEffect, useState } from "react";
import moment from "moment";

import { CalendarHeader } from "./CalendarHeader/CalendarHeader";
import { CalendarGrid } from "./CalendarGrid/CalendarGrid";
import { IScheduleEvent } from "../ScheduleEvent/ScheduleEvent";

export enum CalendarViewEnum {
  Week = 7,
  Month = 21,
}

type Props = {
  items: IScheduleEvent[];
};
export const Calendar: React.FC<Props> = ({ items }) => {
  const [days, setDays] = useState(CalendarViewEnum.Month);
  const [today, setToday] = useState(moment());
  const [startDay, setStartDay] = useState(moment());
  const [dayArr, setDayArr] = useState<any[]>([]);

  useEffect(() => {
    setDayArr(
      [...Array(days)].map((_, index) =>
        moment(today.startOf("w")).clone().add(index, "d")
      )
    );
  }, [days, startDay, today]);

  useEffect(() => {
    setStartDay(today.clone().startOf("month").startOf("week"));
  }, [today]);

  const beforeHandler = () => {
    if (days === CalendarViewEnum.Month) {
      setToday((prev) => moment(prev, "d MMMM").clone().subtract(21, "d"));
    } else {
      setToday((prev) => moment(prev, "d MMMM").clone().subtract(1, "w"));
    }
  };
  const todayHandler = () => {
    setToday(moment());
  };

  const nextHandler = () => {
    if (days === CalendarViewEnum.Month) {
      setToday((prev) => moment(prev, "d MMMM").clone().add(21, "d"));
    } else {
      setToday((prev) => moment(prev, "d MMMM").clone().add(1, "w"));
    }
  };

  const onChangeCalendarView = (newDays: CalendarViewEnum) => {
    setDays(newDays);
  };

  return (
    <div>
      <CalendarHeader
        days={dayArr}
        today={today}
        beforeHandler={beforeHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        onChangeCalendarView={onChangeCalendarView}
        isMonth={days === CalendarViewEnum.Month}
      />
      <CalendarGrid dayArr={dayArr} days={days} items={items} today={today} />
    </div>
  );
};
