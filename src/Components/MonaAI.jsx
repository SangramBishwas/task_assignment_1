import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";
import chatRoom from '../../public/chatroom.png';
const MonaAI = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24 py-12">
            <Heading heading={"MONA AI: Unleashing 5 Groundbreaking AI Tools"}></Heading>
            <div className="flex flex-col md:flex-row gap-3 py-5">
                <Button text={'Chatroom'}></Button>
                <button className='w-full font-[500] text-white/[0.6] px-10 py-3 rounded-lg text-xl bg-[#0A101F] transition-colors text-[#2d9f89] duration-500 hover:ease-linear'>YouTube Translation</button>
                <button className='w-full font-[500] text-white/[0.6] px-10 py-3 rounded-lg text-xl bg-[#0A101F] transition-colors text-[#2d9f89] duration-500 hover:ease-linear'>AI Video Subtitles</button>
                <button className='w-full font-[500] text-white/[0.6] px-10 py-3 rounded-lg text-xl bg-[#0A101F] transition-colors text-[#2d9f89] duration-500 hover:ease-linear'>Images Generation</button>
                <button className='w-full font-[500] text-white/[0.6] px-10 py-3 rounded-lg text-xl bg-[#0A101F] transition-colors text-[#2d9f89] duration-500 hover:ease-linear md:hidden lg:block'>AI Assistant</button>
            </div>
            <div className="flex flex-col-reverse gap-5 lg:flex-row lg:gap-10 py-5 md:py-10 lg:py-16">
                <div className="space-y-5">
                    <Heading subHeading={"Connect Globally with AI-Powered Chatroom"}></Heading>
                    <Paragraph details={"Connect globally with our Chatroom feature, using AI translation for seamless and meaningful conversations."}></Paragraph>
                    <div className="flex gap-4 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg>
                        <p className="text-lg text-white">Chat with people worldwide in your native language.</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg>
                        <p className="text-lg text-white">Utilize AI-powered translation for smooth <br /> communication.</p>
                    </div>
                    <div className="lg:w-1/2 py-10">
                        <Button text={"Try it for free"}></Button>
                    </div>

                </div>
                <img className="w-full" src={chatRoom} width={611} height={509} alt="chatroom" />
            </div>
        </div>
    );
};

export default MonaAI;