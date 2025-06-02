import "../style/EntryPage.css"
import Header from "../components/Header";
import WhoAmI from "../components/WhoAmI";

import Contact from "../components/Contact";


import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Transition from "../components/Common/Transition";
import photo from "../style/bg.png"
import Projects from "../components/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import History from "../components/History";



const EntryPage = () => {

    const [scrolledFromTop, setScrolledFromTop] = useState(false);
    const [isWidthLarge, setIsWidthLarge] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolledFromTop(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsWidthLarge(window.innerWidth >= 992); // Set threshold width
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div className=' EntryPage relative w-full  px-6 lg:px-24  2xl:px-[8rem]  3xl:px-[20rem] 4xl:px-[30rem]' style={{ background: `url(${photo})`, backgroundSize: 'cover' }}>
                <div
                    style={{
                        backgroundColor: scrolledFromTop ? "rgba(255, 255, 255, 0.1)" : undefined,
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)", // Safari support
                    }}
                    className={`${isWidthLarge ? "hidden" : ""} w-full z-50 h-16  top-0 left-0 fixed px-[-1.5rem] ${scrolledFromTop ? "shadow-gray-400 shadow-three" : ""}`}>
                </div>
                <div id="home" >
                    <Header />
                </div>
                <div className="mt-14 lg:mt-0" >
                    <Transition direction="down" >
                        <WhoAmI />
                    </Transition>
                </div>

                <br />
                <br />
                <br />
                <div className="" id="about">
                    <History />
                </div>

                <div className="lg:hidden">
                    <br />
                    <br />
                </div>



                <div className="hidden smmd:block">
                    <br />
                    <br />
                    <br />
                    <br />

                </div>
                <div id="work">
                    <Transition direction="left" >
                        <Projects />
                    </Transition>
                </div>


                <br />
                <div id="services">

                    <AboutUs />
                </div>
                <br />
                <br />
                <br />

                <div className=" lg:px-20">
                    <Transition direction="down">
                        <Contact />
                    </Transition>
                </div>
                <br id="contact" />
                <Footer />
                <br />


                <div>

                </div>
            </div>
        </>
    );
};

export default EntryPage;
