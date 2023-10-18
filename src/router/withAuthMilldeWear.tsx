import nprogress from "nprogress";
import "nprogress/nprogress.css";
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
interface withAuthMilldeWearProps {
  component: React.ReactElement;
}
const withAuthMilldeWear = memo(({ component }: withAuthMilldeWearProps) => {
  nprogress.start();
  const location = useLocation();
  const authWhiteList = ["/login", "/404"];
  nprogress.done();
  if (authWhiteList.includes(location.pathname)) {
    return <>{component}</>;
  } else {
    return <>{component}</>;
  }
});

export default withAuthMilldeWear;
