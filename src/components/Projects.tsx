import { useState } from "react";
import "../style/Portfolio.css";
import "../style/EntryPage.css";
import { portfolioItems } from "../data/PortofolioData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NomralCarousel from "./Common/Carousel/NormalCarousel";

function Projects() {
  const [itemsPerPage] = useState(1);
  const totalItems = portfolioItems.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselImages] = useState<string[]>([]);

  const prevSlide = () => {
    const newIndex =
      currentIndex - 1 < 0
        ? Math.ceil(totalItems / itemsPerPage) - 1
        : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex + 1 >= Math.ceil(totalItems / itemsPerPage)
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getPageItems = (index: number) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return portfolioItems.slice(start, end);
  };

  return (
    <div className="w-full z-0 lg:mt-12 mt-20">
      {isCarousel && (
        <div>
          <NomralCarousel images={carouselImages} myFunction={setIsCarousel} />
        </div>
      )}

      <div className="flex flex-col items-center text-center z-0">
        <div className="bg-gradient-to-r from-[#c196d5] to-[#566fbb] text-transparent bg-clip-text text-[26px] font-mono ">
         Alcuni dei miei migliori lavori, trasformando <br />
        le idee in realtà.
        </div>
      </div>

      <div className="px-4 lg:px-0 py-6 mx-auto w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-in-out relative duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from(
                { length: Math.ceil(totalItems / itemsPerPage) },
                (_, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-row"
                    style={{ minWidth: `${100 / itemsPerPage}%` }}
                  >
                    {getPageItems(index).map((item: any) => (
                      <div key={item.id}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[0, 1, 2, 3].map((colIndex) => (
                            <div className="grid gap-4" key={colIndex}>
                              {item.images
                                .slice(colIndex * 3, colIndex * 3 + 3)
                                .map((src: string, i: number) => (
                                  <div key={i}>
                                    <div key={i}>
                                      <img
                                        className="w-full object-cover rounded-lg"
                                        style={{
                                          height:
                                            colIndex === 0
                                              ? i === 0
                                                ? "180px"
                                                : i === 1
                                                  ? "180px"
                                                  : "260px"
                                              : colIndex === 1
                                                ? i === 0
                                                  ? "300px"
                                                  : i === 1
                                                    ? "180px"
                                                    : "180px"
                                                : colIndex === 2
                                                  ? i === 0
                                                    ? "220px"
                                                    : i === 1
                                                      ? "220px"
                                                      : "180px"
                                                  : "200px",
                                        }}
                                        src={src}
                                        alt={`img-${colIndex * 3 + i}`}
                                      />
                                    </div>

                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex relative justify-between mt-[4rem] px-2 sm:px-4 md:px-8 lg:px-20">
            <button
              onClick={prevSlide}
              className="text-[#ebe6e6] bg-[#2a2929] px-4 py-4 rounded-[50px] hover:bg-red-700"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={nextSlide}
              className="text-[#ebe6e6] bg-[#2a2929] px-4 py-4 rounded-[50px]"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
