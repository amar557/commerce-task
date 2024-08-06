import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layout({ logOutUser, user }) {
  return (
    <div>
      <Navbar logOutUser={logOutUser} user={user} />
      <Outlet />
    </div>
  );
}

export default Layout;
