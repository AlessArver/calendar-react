import { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import Tippy from "@tippyjs/react";

import s from "./CalendarGrid.module.sass";

import { CalendarViewEnum } from "../Calendar";
import { CalendarPopup } from "../CalendarPopup/CalendarPopup";
import {
  IScheduleEvent,
  ScheduleEvent,
} from "../../ScheduleEvent/ScheduleEvent";

export interface CalendarGridProps {
  today: moment.Moment;
  days: CalendarViewEnum;
  items: Array<IScheduleEvent>;
  dayArr: Array<any>;
}
export const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  items,
  dayArr,
  today,
}) => {
  const [chosenEvent, setChosenEvent] = useState<string | null>(null);

  const handleChoseEvent = (value: string | null) => () => {
    if (!value || value !== chosenEvent) {
      setChosenEvent(value);
    } else {
      setChosenEvent(null);
    }
  };

  const isCurrentDay = (day: any) => {
    return moment().isSame(day, "day");
  };
  const isCurrentMonth = (day: any) => today.isSame(day, "month");

  const isSomeDateFrom = (dateFrom: any, id: any) => {
    return items.some((i) => i.dateFrom === dateFrom && i.id !== id);
  };

  return (
    <div className={s.CalendarGrid}>
      {dayArr.map((item, index) => (
        <div
          key={index}
          className={clsx(s.CalendarGridItem, {
            [s.CalendarGridItem_active]: isCurrentMonth(item),
          })}
        >
          <div
            className={s.CalendarGridDay}
            style={{ marginTop: index >= 7 ? `16px` : "0" }}
          >
            {index < 7 && (
              <div className={s.CalendarGridDayWeekName}>
                {moment(item).add(1, "d").format("dd")}
              </div>
            )}
            {days === CalendarViewEnum.Month && (
              <span
                className={clsx(s.CalendarGridDayNumber, {
                  [s.CalendarGridDayNumber_active]: isCurrentDay(item),
                })}
              >
                {item.format("D")}
              </span>
            )}
          </div>
          <div
            className={clsx(s.CalendarGridEvents, {
              [s.CalendarGridEvents_flex]: isSomeDateFrom(
                item.dateFrom,
                item.id
              ),
            })}
          >
            {items
              .filter(
                (event) =>
                  event.dateFrom >= item.format("X") &&
                  event.dateFrom <= item.clone().endOf("day").format("X")
              )
              .map((event, indexEvent) => (
                <Tippy
                  key={event.id}
                  visible={chosenEvent === event.id}
                  onClickOutside={handleChoseEvent(null)}
                  content={
                    <CalendarPopup
                      onClose={handleChoseEvent(null)}
                      {...event}
                    />
                  }
                  placement="right"
                >
                  <ScheduleEvent
                    onClick={handleChoseEvent(event.id)}
                    {...event}
                  />
                </Tippy>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
