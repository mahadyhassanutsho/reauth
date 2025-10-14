import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
