import "./Header.css";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header-frame">
      <div className="header-badge">Retro Profile</div>
      <h1 className="header-title">{title}</h1>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  );
};

export default Header;
