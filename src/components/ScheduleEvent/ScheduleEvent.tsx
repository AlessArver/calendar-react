import React from "react";

import s from "./ScheduleEvent.module.sass";

export interface IScheduleEvent {
  id: string;
  dateFrom: number;
  dateTo: number;
  title: string;
}

export interface ScheduleEventProps extends IScheduleEvent {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export const ScheduleEvent = React.forwardRef<
  HTMLDivElement,
  ScheduleEventProps
>(({ title, onClick }, ref) => {
  return (
    <div onClick={onClick} className={s.ScheduleEvent} ref={ref}>
      {title}
    </div>
  );
});
