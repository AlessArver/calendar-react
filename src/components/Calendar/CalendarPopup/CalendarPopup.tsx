import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import s from "./CalendarPopup.module.sass";
import { IScheduleEvent } from "components/ScheduleEvent/ScheduleEvent";
import moment from "moment";

export interface CalendarPopupProps extends IScheduleEvent {
  style?: React.CSSProperties;
  onClose: () => void;
}

export const CalendarPopup = React.forwardRef<
  HTMLDivElement,
  CalendarPopupProps
>(({ style, title, dateFrom, dateTo, onClose }, ref) => {
  return (
    <div ref={ref} className={s.CalendarPopup} style={style}>
      <div className={s.CalendarPopupHeader}>
        <CloseIcon onClick={onClose} className={s.CalendarPopupClose} />
      </div>
      <div className={s.CalendarPopupContent}>
        <div className={s.CalendarPopupTitle}>{title}</div>
        <div className={s.CalendarPopupDate}>
          {moment.unix(dateFrom).format("D.MM.YYYY")} -
          {moment.unix(dateTo).format("D.MM.YYYY")}
        </div>
      </div>
    </div>
  );
});
