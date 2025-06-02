import SingleContainer from "./SingleContainer";
import ContainerData from "./ContainerData";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <section id="features" className="  md:pt-16 lg:pt-16  ">
          <div className="container sm:pl-[30px]  mt-[30px]">
            <div className=" grid grid-cols-1 gap-x-4 gap-y-0 md:grid-cols-2 mdlg:grid-cols-3 lg:grid-cols-3 lgxl:grid-cols-4">
              {ContainerData.map((feature) => (
                <SingleContainer key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      </div>
 
    </>
  );
};

export default AboutUs;