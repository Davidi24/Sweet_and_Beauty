import { useState } from "react";
import { Contacts } from "../types/Contact";
import NoCloseAlert from "./Common/Alerts/NoCloseAlert";
import { useEffect } from "react";
import "../style/EntryPage.css";
import { sendMessage } from "../utilities/Helpers/ExternalConnection";


const Contact = () => {
  const [isMessSent, setmessageSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<Contacts>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  useEffect(() => {
    if (isMessSent) {
      const timer = setTimeout(() => {
        setmessageSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMessSent]);

  const handleSubmit = async () => {
    console.log("here")
    const result = await sendMessage(formData);
    if (result == "Form Submitted Successfully") {
      setmessageSent(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrorMsg('');
    }
    else {
      setmessageSent(false)
      setErrorMsg(result);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col text-center font-lato">
        <div className="font-mono text-[18px] text-[#000000]">Contatto</div>
        <div className="font-mono text-[30px] bg-gradient-to-r from-[#c196d5] to-[#566fbb] text-transparent bg-clip-text ">Contattami</div>
      </div>

      <div className="w-full mt-[40px]  md:justify-between   lg:flex ">
        {isMessSent && (
          <div className="">
            <NoCloseAlert
              title="Message sent successfuly"
              text="We will contact you as soon as possible"
              color=""
              customClassName="bg-gradient-to-r from-[#a367bf] to-[#667ec5]"
            />
          </div>
        )}


      


        <div 
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)", // Safari support
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          
     }} className=" shadow-neumorphic lg:h-[32rem] py-10 px-7">
          <div className="lg:hidden w-full flex justify-center text-center
           text-[17px] sm:tet-[18px] md:text-[20px] mt-[-1rem] mb-6 text-black font-semibold">
            Send a message</div>
          <div>
            <div className="-mx-4 flex flex-wrap">

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo nome completo *"
                    className="w-full rounded-md   px-6 py-3 text-base text-black outline-none  focus:font-medium "
                  />
                </div>
              </div>

    

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo numero di telefono *"
                    className="w-full rounded-md   px-6 py-3 text-base text-black outline-none  focus:font-medium " />
                </div>
              </div>

              <div className="w-full px-4 md:w-full">
                <div className="mb-8">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Scrivi il tuo messaggio *"
                    className="w-full rounded-md border-none focus:border-none   h-48 px-6 py-3 text-base text-black outline-none focus:ring focus:ring-transparent"
                  ></textarea>
                </div>

                <div>
                  <div className="ml-5 mt-[-1rem] mb-2 text-[#d33857]">
                    {errorMsg}
                  </div>
                </div>


              </div>



              <div className="px-4 w-full flex justify-center  mt-4 mb-2 ">
                <div onClick={handleSubmit}
                  className=" flex   rounded-md cursor-pointer">
                  <button
                    className="p-0 relative m-0 w-full text-base outline-none focus:font-medium appearance-none border-0 rounded-full px-5 py-2 bg-[#2f2d2d] text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-black hover:text-black"
                  >
                 Inviare un messaggio
                  </button>
                  {/* <div className="pr-4 text-gray-300 -rotate-45">
                    <SendIcon />
                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
