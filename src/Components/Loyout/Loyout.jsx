// Libraries
import { Outlet } from "react-router-dom";
// JSX
import Header from "../Header/Header";

export default function Loyout() {
  return (
    <div>
      <Header />
      <hr style={{ border: "1px solid #700000" }} />
      <Outlet />
    </div>
  );
}
