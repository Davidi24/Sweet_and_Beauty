import { AboutUsType } from "../../types/serviceType";

const SingleContainer = ({ feature }: { feature: AboutUsType }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full p-[20px] pl-[29px] rounded-[20px] cursor-pointer ">
      <div className={`relative `}>
        <div className=" mb-[20px] mt-[20px] flex h-[60px] w-[60px] rounded-full items-center justify-center  bg-[#2f2d2d]   text-[#ffffff]">
          {icon}
        </div>
        <h3
          className={`text-nowrap ml-[2px] mb-[7px] text-xl font-semibold  bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text sm:text-xl lg:text-xl xl:text-xxl`}
        >
          {title}
        </h3>
        <p
          className={`pr-[10px] bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text text-base font-lato leading-relaxed text-[13px]`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleContainer;