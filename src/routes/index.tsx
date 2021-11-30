import { Routes, RouteType } from "hocs/Routes";
import { MainLayout } from "layouts/Main/MainLayout";
import { CalendarPage } from "pages/calendar/CalendarPage";
import { IndexPage } from "pages/index/IndexPage";
import { CALENDAR_PAGE_ROUTE, INDEX_PAGE_ROUTE } from "./routesNames";

const routes: RouteType[] = [
  {
    path: INDEX_PAGE_ROUTE,
    element: <IndexPage />,
    layout: MainLayout,
  },
  {
    path: CALENDAR_PAGE_ROUTE,
    element: <CalendarPage />,
    layout: MainLayout,
  },
];

export const AppRoutes = Routes(routes);
