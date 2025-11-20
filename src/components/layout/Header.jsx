const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Dashboard</h1>

      <div className="header__actions">
        <button className="header__theme-toggle">🌙</button>
        <div className="header__avatar">BL</div>
      </div>
    </header>
  );
};

export default Header;
