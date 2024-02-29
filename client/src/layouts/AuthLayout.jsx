import { Outlet } from "react-router-dom";

import GuestHeader from "../components/GuestHeader";

const AuthLayout = () => {
  return (
    <div>
      <GuestHeader />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
