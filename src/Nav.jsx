import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import headerLogo from '../public/footer-logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [IsOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='px-0 lg:px-10 relative'>
            <div className='text-gray-400 h-[50px] md:h-[75px] flex justify-between items-center px-5 lg:px-20 w-full fixed lg:backdrop-blur-lg py-5'>
                <img className="h-8 w-44" src={headerLogo} alt="webLogo" />
                <ul className='hidden lg:text-lg text-[#fff9] lg:flex lg:justify-evenly lg:items-center lg:px-5 w-full relative gap-2'>
                    <li className='font-bold text-white primary-color'><a href="#">Home</a></li>
                    <li className=''><a href="#" onClick={() => setIsOpen(!IsOpen)} className='hover:font-semibold flex items-center gap-2'>AI Services
                        {
                            IsOpen ? <IoIosArrowUp className='mx-2 mt-1' /> : <IoIosArrowDown className="mx-2 mt-1" />
                        }
                    </a></li>
                    <li className=''><a href="#" className='font-semibold hover:text-white'>About Us</a></li>
                    <li className=''><a href="#" className='font-semibold hover:text-white'>Pricing</a></li>
                    <li className=''><a href="#" className='font-semibold hover:text-white'>FAQ</a></li>
                    <li className=''><a href="#" className='font-semibold hover:text-white'>Contact Us</a></li>
                    <li>
                        <button className='text-xl cursor-pointer hover:text-white'>Login</button>
                    </li>
                    <li>
                        <button className='rounded-[8px] border border-[#2D9F89] px-[24px] py-[12px] text-[#2D9F89] text-xl'>Signup  </button>
                    </li>
                </ul>
                <div className='md:flex md:items-center md:gap-6'>

                    <div onClick={handleNav} className='block px-5 lg:hidden'>
                        {nav ? <AiOutlineClose size={25} color='red' /> : <AiOutlineMenu size={25} color='white' />}
                    </div>

                    {/* Responsive */}

                    <div className={nav ? 'fixed bg-black h-full w-[50%] top-0 left-0 ease-in-out transition-all' : 'fixed left-[-100%]'}>
                        <div className='p-5'>
                            <img className="h-8 w-44" src={headerLogo} alt="webLogo" />
                        </div>
                        <ul className='px-10 py-5 text-[#fff9] flex flex-col gap-6'>
                            <li className='text-white font-bold primary-color'><a href="#">Home</a></li>
                            <li className=''><a href="#" onClick={() => setIsOpen(!IsOpen)} className='hover:font-semibold flex items-center gap'>AI Services
                                {
                                    IsOpen ? <IoIosArrowUp className='mx-2 mt-1' /> : <IoIosArrowDown className="mx-2 mt-1" />
                                }
                            </a></li>
                            <li className=''><a href="#" className='hover:text-white'>About Us</a></li>
                            <li className=''><a href="#" className='hover:text-white'>Pricing</a></li>
                            <li className=''><a href="#" className='hover:text-white'>FAQ</a></li>
                            <li className=''><a href="#" className='hover:text-white'>Contact Us</a></li>
                            <li>
                                <button className='text-xl cursor-pointer hover:text-white'>Login</button>
                            </li>
                            <li>
                                <button className='rounded-[8px] border border-[#2D9F89] px-[24px] py-[12px] text-[#2D9F89] text-xl'>signup  </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {IsOpen &&
                <ul className='bg-[#19233A] p-2 w-64 h-auto gap-6 text-white flex flex-col justify-between text-xl py-4 absolute left-10 top-44 lg:left-1/4 lg:top-20'>
                    <li>Youtube Transilation</li>
                    <li>Youtube Watch</li>
                    <li>A.I Research Assistant</li>
                    <li>Image Generation</li>
                </ul>

            }
        </div>
    );
};

export default Navbar;