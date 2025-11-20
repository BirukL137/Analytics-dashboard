import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
