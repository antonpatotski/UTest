import { Routes, Route } from "react-router-dom";
import { ROUTE_PATH } from "./constants/routes";
import { Landing } from './pages/landing/landing';
import { ItemInfo } from "./pages/itemInfo/itemInfo";

export const Routing = () => (
  <Routes>
    <Route path={ROUTE_PATH.home} >
      <Route index element={<Landing />} />
      <Route path={ROUTE_PATH.itemInfo} element={<ItemInfo />} />
    </Route>
  </Routes>
)
