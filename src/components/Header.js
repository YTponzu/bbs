import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <p className="header--title">掲示板</p>
      <a href="." className="header--newthread-btn">スレッドをたてる</a>
    </header>
  )
};

export default Header;
