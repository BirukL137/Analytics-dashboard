const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">Analytics</h2>

      <nav className="sidebar__nav">
        <a className="sidebar__link sidebar__link--active" href="#">
          Dashboard
        </a>
        <a className="sidebar__link" href="#">
          Reports
        </a>
        <a className="sidebar__link" href="#">
          Users
        </a>
        <a className="sidebar__link" href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
