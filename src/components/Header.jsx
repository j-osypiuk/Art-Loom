import logo from "../assets/react.svg"
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

const Header = () => {
    const [dropdownExpanded, setDropdownExpanded] = useState(false);
    let dropdownExpandedRef = useRef(dropdownExpanded);
    let menuBtnRef = useRef();

    useEffect(() => {
        dropdownExpandedRef.current = dropdownExpanded;
    }, [dropdownExpanded]);

    useEffect(() => {
        const handleClick = (event) => {
            if (menuBtnRef.current.contains(event.target) && !dropdownExpandedRef.current) {
                setDropdownExpanded(true);
            } else {
                setDropdownExpanded(false);
            }
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setDropdownExpanded(false);
            }
        }

        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    return (
        <header className="cmp-header">
            <Link className="cmp-header__nav-link cmp-header__nav-icon" to="/">
                <img className="cmp-header__logo" alt="app logo" src={logo}/>
            </Link>
            <nav className="cmp-header__nav">
                <div className={`cmp-header__nav-list-item-wrap ${dropdownExpanded && 'cmp-header__nav-list-item-wrap--expanded'}`}>
                    <ul className="cmp-header__nav-list">
                        <li>
                            <Link className="cmp-header__nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="cmp-header__nav-link" to="/discover">Discover</Link>
                        </li>
                        <li>
                            <Link className="cmp-header__nav-link" to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link className="cmp-header__nav-link" to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div className="cmp-header__welcome_wrap">
                    <p className="cmp-header__welcome">Welcome Juan Pablo!</p>
                    <Link className="cmp-header__nav-icon cmp-header__nav-link" to="/login"><FiLogIn /></Link>
                </div>
                <button className="cmp-header__menu-btn" type="button" ref={menuBtnRef}>
                    <FiMenu />
                </button>
            </nav>
        </header>
    );
}

export default Header;