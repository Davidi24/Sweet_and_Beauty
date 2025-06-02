import me from "../assets/Images/EntryPage/main_image.png";
import "../style/EntryPage.css"
import { personalInfo } from "../data/GeneralData";
import InstagramIcon from '@mui/icons-material/Instagram';
import { openInstagramPage } from "../utilities/Helpers/ExternalConnection";



function WhoAmI() {
    return (
        <div className="sm:flex w-full mt-16 lg:mt-10 overflow-visible">
            <div className="relative lgxl:w-[60%] lg:w-[65%] smmd:w-[50%] lg:mt-12  p-4 text-white">

                <div className="flex text-[25px] lg:text-[31px] mt-6 font-michroma items-baseline tracking-wider sm:tracking-normal justify-center sm:justify-start whitespace-nowrap">
                </div>
                <div className="flex text-[25px] lg:text-[31px] mt-0 font-michroma items-baseline tracking-wider sm:tracking-normal justify-center sm:justify-start whitespace-nowrap">

                    <p className="font-mono bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent font-semibold bg-clip-text text-[35px] lg:text-[48px]">{personalInfo.full_name}</p>
                </div>

                <div className="flex relative h-[27rem]  justify-center items-center smmd:hidden ">
                    <div
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                        }}
                        className="overflow-hidden  absolute z-0 rounded-full shadow-neumorphic flex items-center justify-center min-h-[21rem] min-w=[21rem] h-[19rem] w-[19rem] mt-6">
                        <img
                            src={me}
                            alt=""
                            className="mt-[2rem] h-[100%] w-auto object-contain z-10 "
                        />
                    </div>
                </div>



                <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start mt-10 sm:mt-6  font-michroma ">
                    <p className="text-center sm:text-start bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text  mt-1 text-[14px]  md:text-[17px]">
                        {personalInfo.abautMe}
                    </p>
                </div>


                <div className="mt-8 flex flex-row justify-center items-center sm:items-start sm:justify-start gap-4"
                 onClick={() => { openInstagramPage("sweetandbeauty6") }}>
                    <button className="rounded-full flex gap-2 px-8 py-3 bg-[#2f2d2d] mt-2 text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-black hover:text-black">
                        Instagram
                        <InstagramIcon />
                    </button>
                </div>




            </div>

            <div className="relative overflow-visible w-[70%] lgxl:w-[40%] lg:w-[35%] sm:w-[50%] h-[28rem] mt-[-4rem] sm:mt-0 md:ml-[4rem] left-4 hidden smmd:flex">
                <div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        overflow: "hidden",
                    }}
                    className="relative z-0 rounded-full shadow-neumorphic flex items-end justify-center h-[23rem] w-[23rem] smmd:w-[17rem] smmd:h-[17rem] smmd:mt-[6rem] smmd:ml-[1rem] md:w-[19rem] md:h-[19rem] md:ml-[-2rem] lgxl:w-[24rem] lgxl:h-[24rem] lgxl:mt-[2rem] 2xl:w-[26rem] 2xl:h-[26rem]"
                >
                    <img
                        src={me}
                        alt=""
                        className="relative z-10 mt-16 h-auto w-[64%] object-contain"
                    />
                </div>
            </div>






        </div >
    )
}

export default WhoAmI