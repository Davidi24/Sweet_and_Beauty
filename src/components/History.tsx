import img from "../assets/Images/EntryPage/about_image.png";
import { missionData } from "../data/GeneralData";

function History() {
    return (
        <div className="flex relative h-[30rem] mt-8 lg:mt-0 sm:h-[35rem] smmd:h-[25rem] lg:h-[32rem]">
            <div className="mt-[-6rem] absolute z-0 min-w-[30rem] max-w-[30rem] lg:min-w-[60rem] lg:max-w-[60rem] max-h-[30rem] lg:max-h-[70rem] lg:min-h-[70rem] -mx-6 lg:-mx-24 2xl:-mx-[10rem] 3xl:-mx-[20rem] 4xl:-mx-[30rem]">
                <img src={img} alt="" className="w-full h-full max-h-[20rem] lg:max-h-[40rem]" />
            </div>
            <div className="w-[50%] h-[18rem]"></div>
            <div className="z-10 mt-[10rem] w-[100%] text-justify sm:w-[50%] sm:mt-0 sm:mr-[3rem] md:mr-[8rem] lg:mr-0 lg:px-[2rem] lg:mt-[10rem]">
                <p className="text-center font-semibold text-[30px] lg:mb-4 -mt-11 font-mono bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text">
                  La nostra missione
                </p>

                {/* Short mission for small screens */}
                <p className="leading-[1.9rem] block md:hidden">
                    {missionData.misssion}
                </p>

                {/* Long mission for md and larger screens */}
                <p className="leading-[1.9rem] hidden md:block">
                    {missionData.misssionLong}
                </p>
            </div>
        </div>
    );
}

export default History;
