import React from "react";
import { useAtom } from "jotai";
import { eventsAtom } from "store/calendar";
import { Calendar } from "../../components/Calendar/Calendar";

export interface CalendarPageProps {}

export const CalendarPage: React.FC<CalendarPageProps> = () => {
  const [events] = useAtom(eventsAtom);

  return (
    <>
      <Calendar items={events} />
    </>
  );
};
