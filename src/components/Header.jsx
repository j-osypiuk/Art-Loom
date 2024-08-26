import logo from "../assets/react.svg"

const Header = () => {
    return (
        <header className="cmp-header">
            <a href="#">
                <img className="cmp-header__logo" alt="app logo" src={logo} />
            </a>
            <nav className="cmp-header__nav">
                <ul className="cmp-header__nav-list">
                    <li><a className="cmp-header__nav-link" href="/">Home</a></li>
                    <li><a className="cmp-header__nav-link" href="/profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;