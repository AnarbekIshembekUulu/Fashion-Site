import "./header.css";
import logo from "../../img/logo/YOUR LOGO.svg";

const Header = () => {
    return (
        <header>
            <img src={logo} className="logo__img" alt="logo" />
            <nav className="header__menu">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">lookbook</a>
                <a href="#">features</a>
                <a href="#">pages</a>
                <a href="#">blog</a>
            </nav>
            <nav className="header__menu">
                <a href="#">search</a>
                <a href="#">heart</a>
                <a href="#">shopping-cart</a>
            </nav>
        </header>
    );
};

export default Header;
