import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="." className="header--title">掲示板</a>
      <a href="create-thread" className="header--newthread-btn">スレッドをたてる</a>
    </header>
  )
};

export default Header;
