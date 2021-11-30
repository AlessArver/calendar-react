import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CALENDAR_PAGE_ROUTE } from "routes/routesNames";

export interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(CALENDAR_PAGE_ROUTE);
  }, [navigate]);

  return <></>;
};
