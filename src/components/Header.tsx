import { useState, useEffect } from "react";
import More from "./Common/More";
import { Link } from "react-scroll";
import avatar from '../assets/Icons/avatar.png';
import "../style/EntryPage.css";
import Transition from "./Common/Transition";
import EmailIcon from '@mui/icons-material/Email';

function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [moreSize, setMoreSize] = useState("medium");
  const [animateIn, setAnimateIn] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => setAnimateIn(true), 100);
  return () => clearTimeout(timeout);
}, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 575) {
        setMoreSize("large");
      } else {
        setMoreSize("medium");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    const sections = ["home", "about", "work", "services"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.5, 0.8],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          setIsSelected(index);
        }
      });
    }, observerOptions);

    sectionElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <header
        className={`flex fixed lg:static z-50 left-4 right-4 sm:left-8 sm:right-8 justify-between items-center transition-all duration-1000 ${scrolledFromTop ? "h-16 drop-shadow-3xl" : "h-20"
          }`}
      >

        <a
          href="#"
          className={`w-[30%] lg:w-[20%] flex items-center transition-all duration-700 transform ${animateIn ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
        >
          <img
            src={avatar}
            alt="Logo"
            className={`h-[4rem] min-w-[4rem] lg:min-h-[4rem] lg:min-w-[4rem] transform origin-left transition duration-200 ${scrolledFromTop ? "scale-75" : "scale-100"
              }`}
          />
        </a>



        <div className="z-50">
          <Transition>
            <div className="Header flex justify-center align-top h-[25px] z-50">
              <nav
                style={{
                  backgroundColor: scrolledFromTop
                    ? "rgba(255, 255, 255, 0.1)"
                    : undefined,
                  backdropFilter: "blur(80px)",
                  WebkitBackdropFilter: "blur(80px)",
                }}
                className={`hidden nav:flex py-2 lg:fixed lg:text-center lg:justify-center mr-[20px] text-[#302e2e] rounded-[50px] text-nowrap transition-all duration-300 ${scrolledFromTop ? "mt-[-8px]" : "bg-transparent"
                  }`}
              >
                <ul className="flex justify-between align-middle px-6 font-medium py-[5px] text-[13px]">
                  <li
                    className={`mr-16 ${isSelected === 0 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(0)}
                    >
                      INIZIO
                    </Link>
                  </li>

                  <li className={`mr-16 cursor-pointer ${isSelected === 1 ? "underline" : ""} ...`}>
                    <Link to="about" spy={true} smooth={true} duration={300} onClick={() => setIsSelected(1)}>
                      CHI SIAMO
                    </Link>
                  </li>



                  <li
                    className={`mr-16 ${isSelected === 2 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(1)}
                    >
                      IL MIO LAVORO
                    </Link>
                  </li>

                  <li
                    className={`mr-16 ${isSelected === 3 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(2)}
                    >
                      SERVIZI
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>
          </Transition>
        </div>

        <Transition>
          <div className="flex items-center">
            <div className="flex gap-x-2">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
              >
                <button className="rounded-full flex gap-2 px-5 py-2 bg-[#2f2d2d] mt-2 text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-black hover:text-black">
                  Contattaci
                  <EmailIcon />
                </button>
              </Link>

            </div>
            <div className="text-black flex nav:hidden text-right cursor-pointer justify-start">
              <More size={moreSize} />
            </div>
          </div>
        </Transition>
      </header>
    </>
  );
}

export default Header;
