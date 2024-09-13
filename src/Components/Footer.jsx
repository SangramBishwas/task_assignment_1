import { GoLocation } from "react-icons/go";
import Heading from "../Shared/Heading";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 justify-between gap-10 bg-[#000613] px-5 md:px-10 lg:px-24 py-10 lg:py-20'>
            <div className="space-y-6">
                <img src="../../public/footer-logo.png" alt="" />
                <p className="text-white text-base">We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.</p>
            </div>
            <div>
                <Heading subHeading={'Quick Links'}></Heading>
                <ul className='text-lg text-[#fff9] flex flex-col gap-6'>
                    <li className='text-[#fff9] primary-color'><a href="#">Home</a></li>
                    <li className=''><a href="#" className='hover:text-white'>About Us</a></li>
                    <li className=''><a href="#" className='hover:text-white'>Pricing</a></li>
                    <li className=''><a href="#" className='hover:text-white'>FAQ</a></li>
                    <li className=''><a href="#" className='hover:text-white'>Contact Us</a></li>
                </ul>
            </div>
            <div>
                <Heading subHeading={'Tools'}></Heading>
                <ul className='text-lg text-[#fff9] flex flex-col gap-6'>
                    <li className='text-[#fff9] primary-color'><a href="#">AI Video Subtitles</a></li>
                    <li className=''><a href="#" className='hover:text-white'>YouTube Translation</a></li>
                    <li className=''><a href="#" className='hover:text-white'>Youtube Watch</a></li>
                    <li className=''><a href="#" className='hover:text-white'>Images Generation</a></li>
                    <li className=''><a href="#" className='hover:text-white'>AI Assistant</a></li>
                </ul></div>
            <div>
                <Heading subHeading={'Get In Touch'}></Heading>
                <ul className="text-[#fff9] text-lg flex flex-col gap-6">
                    <li className="flex items-center gap-3"><GoLocation /> Times Square Office Building</li>
                    <li className="flex items-center gap-3"><MdEmail /> info@mona-ai.mn</li>
                    <li className="flex items-center gap-3"><MdCall /> +890</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;