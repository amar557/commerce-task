import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function Layout({ logOutUser, user }) {
  return (
    <div>
      <Navbar logOutUser={logOutUser} user={user} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
