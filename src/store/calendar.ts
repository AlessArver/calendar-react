import { atom } from "jotai";

import { IScheduleEvent } from "./../components/ScheduleEvent/ScheduleEvent";

export const eventsAtom = atom<IScheduleEvent[]>([
  {
    id: "1",
    dateFrom: 1638187200,
    dateTo: 1638194400,
    title: "Вынести мусор",
  },
  {
    id: "2",
    dateFrom: 1638280800,
    dateTo: 1638288000,
    title: "Работа",
  },
  {
    id: "3",
    dateFrom: 1639130400,
    dateTo: 1639137600,
    title: "Учеба",
  },
]);
