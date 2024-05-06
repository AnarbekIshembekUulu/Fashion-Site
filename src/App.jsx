import "./App.css";
// import fontPoppins from "./fonts";
import logo from "./img/logo/YOUR LOGO.svg";
import img1 from "./img/sectionImg1.jpeg";
import img2 from "./img/sectionImg2.jpeg";
import img3 from "./img/sectionImg3.jpeg";
import img4 from "./img/sectionImg4.jpeg";

const App = () => {
    return (
        <div>
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
            <section className="hero__background">
                <p className="new__trend_text">NEW TREND</p>
                <h1 className="title">COLLUSION</h1>
                <p className="short__description">
                    An exclusive selection of this season's trends.
                </p>
                <div className="btn__container">
                    <button>discover</button>
                    <button>shop now</button>
                </div>
            </section>
            <main>
                <section className="section__img">
                    <div className="img__section1">
                        <div>
                            <img src={img1} alt="#" />
                        </div>
                        <div className="img__section1_section1">
                            <img src={img2} alt="#" />
                            <img src={img3} alt="#" />
                        </div>
                    </div>
                    <div className="img__section2">
                        <img src={img4} alt="#" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
