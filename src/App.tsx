import router from "@/router";
import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import WithAuthMilldeWear from "./router/withAuthMilldeWear";
function App() {
  const routerView = useRoutes(router);
  console.log("routerView");
  const cacheRouterView = useMemo(() => routerView, [routerView]);
  return <>{<WithAuthMilldeWear component={cacheRouterView!} />}</>;
}

export default App;
