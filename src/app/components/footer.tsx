import {Copyright} from "lucide-react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import Link from "next/link";
import { FaLinkedin ,FaFacebook} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaSquareWhatsapp } from "react-icons/fa6";



export default function Footer(){
    return(
        <footer className="w-full h-[470px] flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
        <div className="w-full p-5 h-[90%] space-y-5 bg-white flex flex-col justify-start items-center">
         <div className="bg-gray-200  text-gray-500 w-[100px] h-[30px] rounded-xl flex justify-center items-center ">Get in touch</div>
         <p className="text-gray-500 font-serif pt-4 text-sm md:text-lg">What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
        <div className="flex flex-col items-center ">
        <h1 className=" md:text-xl  font-[600] pt-2 flex items-center"><MdOutlineMailOutline className="mr-3 text-[25px] md:text-[40px] text-gray-500"/> muzafarkalwarr@gmail.com <BsCopy className="ml-3 cursor-pointer	"/></h1>
        <h1 className=" md:text-xl  font-[600] pt-2 flex items-center"><MdPhone className="mr-3 text-[25px] md:text-[30px] text-gray-500"/> 0311-3536989 <BsCopy className="ml-3 cursor-pointer	"/></h1>
        </div>
         <span className="text-sm">You may also find me on these platforms!</span>
         <span className="flex items-center space-x-5 ">
            <Link href={"https://github.com/MUZAFFARALIKALWAR"}><FiGithub className="text-gray-900 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>
            <Link href={"https://www.linkedin.com/in/muzaffar-ali-0b3939315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin className="text-blue-700 text-2xl md:text-3xl  cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>
            <Link href={"https://youtube.com/@muzaffaritacademy?si=SuG4RIRxpEh2Z2qA"}><IoLogoYoutube className="text-red-500 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>
            <Link href={"https://www.facebook.com/profile.php?id=100093557110026"}><FaFacebook className="text-blue-700 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>
            <Link href={"https://chat.whatsapp.com/EJ4MB6rr9Jm6Nlj4YYMrH1"}><FaSquareWhatsapp className="text-green-500 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>
            </span>

        </div>
          <div className="flex items-center justify-center py-3"><Copyright className="text-xs md:text-sm"/><span className="text-xs md:text-sm ml-3">2024 | Designed and coded with ❤️️ by Muzaffar Ali</span></div>

        </footer>
    )
}