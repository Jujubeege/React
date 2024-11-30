import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navigation />

      <div className="layout__content">
        <main className="layout__main">
          <Outlet />
        </main>

        <Sidebar className="layout__sidebar" />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
