import "../style/EntryPage.css"
import { footerIcons } from "../data/IconData"

function Footer() {
    return (
        <div>
           
            <div className="w-full  mt-8 flex flex-col justify-center items-center">
                <div className="flex gap-5">
                    {footerIcons.map((item, index) => (
                        <div onClick={item.onClick} className="p-2 shadow-black  text-[#000000] cursor-pointer" key={index}>
                            {item.icon}
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-[13px] font-lato text-[#000000]">© 2024 sweetandbeauty6. Tutti i diritti riservati.</div>
            </div>
        </div>
    )
}

export default Footer