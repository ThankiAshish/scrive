import { Outlet } from "react-router-dom";

import GuestHeader from "../components/GuestHeader";
import UserHeader from "../components/UserHeader";

import AuthStore from "../helpers/auth.helper";

const MainLayout = () => {
  const { loginState } = AuthStore();

  return (
    <div>
      {loginState ? <UserHeader /> : <GuestHeader />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
