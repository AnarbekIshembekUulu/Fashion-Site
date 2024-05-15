import "./App.css";
import FashionSection from "./components/fashion-section/FashionSection";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionImg from "./components/section-img/SectionImg";
import womenImg1 from "./img/womenFashion/1.jpeg";
import womenImg2 from "./img/womenFashion/2.jpeg";
import womenImg3 from "./img/womenFashion/3.jpeg";
import womenImg4 from "./img/womenFashion/4.jpeg";
import menImg1 from "./img/menFashion/1.jpeg";
import menImg2 from "./img/menFashion/2.jpeg";
import menImg3 from "./img/menFashion/3.jpeg";
import menImg4 from "./img/menFashion/4.jpeg";

const cardArrWomen = [
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: womenImg1,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: womenImg2,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: womenImg3,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: womenImg4,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
];

const cardArrMen = [
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: menImg1,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: menImg2,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: menImg3,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
    {
        title: "IGURE",
        description: "GREEN MUSCLE FIT POLO SHIRT",
        img: menImg4,
        oldPrice: "$122.2",
        newPrice: "$99.8",
    },
];

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <SectionImg />
            <FashionSection
                title={"WOMEN’S FASHION"}
                subtitle={"Shop our new arrivals from established brands"}
                data={cardArrWomen}
            />
            <FashionSection
                title={"MEN'S SECTION"}
                subtitle={"Shop our new arrivals from established brands"}
                data={cardArrMen}
            />
        </>
    );
};

export default App;
