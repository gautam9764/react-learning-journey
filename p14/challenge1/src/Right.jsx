
import profile from "../public/favicon.svg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa6";

import Btn from "./Btn";


import { IoIosHeartEmpty } from "react-icons/io";
import { BiSolidShare } from "react-icons/bi";

function Right (){
    return(
        <>
            <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
                <div className="w-90 h-110 bg-[#ce0909]  grid grid-cols-1 grid-rows-3 rounded-2xl shadow-2xl">
                    <div className="relative w-full h-37 bg-[#4071F4] rounded-t-2xl">
                        <img src={profile} alt="profile" className="h-full p-1 rounded-full aspect-square object-cover object-top border-2 absolute translate-x-30 translate-y-1/5  border-blue-500"/>   
                    </div> 
                    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center gap-1.5">
                        <h1 className="font-bold text-2xl">CodingLab</h1>
                        <h5 className="font-bold">YouTuber & Blogger</h5>
                        <div className="w-[80%] flex justify-evenly items-center ">
                            <FaFacebook className="text-3xl text-[#4168B4]"/>
                            <AiFillTwitterCircle className="text-3xl text-[#21A1ED]" />
                            <PiInstagramLogoFill className="text-3xl text-[#E0306B]"/>
                            <FaYoutube className="text-3xl text-[#FE0301]"/>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] rounded-b-2xl flex flex-col justify-evenly items-center ">
                        <div className="flex justify-center items-center gap-3">
                            <Btn name="Subscribe"/>
                            <Btn name="Message"/>   
                        </div>
                        <div className=" w-full flex justify-evenly items-center ">
                            <div className="pr-3 border-r-2 flex flex-row justify-evenly items-center gap-1"><IoIosHeartEmpty />60.4k</div>
                            <div className="pr-3 border-r-2 flex flex-row justify-evenly items-center gap-1"><IoIosHeartEmpty /> 20k</div>
                            <div className="pr-3 border-r-2 flex flex-row justify-evenly items-center gap-1"><BiSolidShare /> 12.4k</div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Right