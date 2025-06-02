import { ServiceType } from "../../types/serviceType";

const SingleService = ({ feature }: { feature: ServiceType }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div  style={{
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)", // Safari support
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      
 }} 
      className="w-full p-[20px] pl-[29px] rounded-[10px] shadow-neumorphic cursor-pointer hover:bg-[#181818] transform transition-all duration-300 hover:scale-110"
    >
      <div className="flex relative">
        {/* <div className="mb-[5px] mt-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-md bg-transparent bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3
          className="ml-[2px] mb-[7px] text-xl font-semibold bg-gradient-to-r from-[#c196d5] to-[#566fbb] text-transparent bg-clip-text  sm:text-2xl lg:text-xl xl:text-xxl"
        >
          {title}
        </h3>
        <p className="font-mono pr-[10px] text-black text-base leading-relaxed text-[11.8px]">
          {paragraph}
        </p> */}
        <div className=" w-[20%]">
         <div className="">
          {icon}
         </div> 
        </div>
        <div className="  w-[80%]">
        <h3
          className="ml-[2px] mb-[7px] text-xl font-semibold bg-gradient-to-r from-[#c196d5] to-[#566fbb] text-transparent bg-clip-text  sm:text-2xl lg:text-xl xl:text-xxl"
        >
          {title}
        </h3>
        <p className="font-lato pr-[10px] text-[#4a4949] text-base leading-relaxed text-[11.7px]">
          {paragraph}
        </p> 
        </div>

      </div>
    </div>
  );
};

export default SingleService;
