import { Outlet } from "react-router-dom";
import DashMenu from "../Dashboard/DashMenu/DashMenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <DashMenu />
      </div>
      <div className="mt-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
