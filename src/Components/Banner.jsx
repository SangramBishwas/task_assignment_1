import Button from "../Shared/Button";

const Banner = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24">
            <div className="py-12 lg:py-16">
                <h2 className="header-font font-semibold text-center text-[32px] leading-[38px] text-white/[0.8] lg:text-[80px] lg:leading-[104px]">Unlock Global Knowledge with Our <br />
                    <span className="header-font font-semibold text-center text-[32px] leading-[38px] text-white/[0.8] lg:text-[80px] lg:leading-[104px]">Ai Translation Services</span></h2>
                <p className="font-inter mt-[20px] hidden text-center text-[20px] font-[400] text-white/[0.7] lg:block">
                    Accuracy of translation is 90%+ on most languages. Professional dubbing and subtitle creation
                </p>
            </div>
            <div className="w-full">
                <img src="./../../public/banner.png" alt="banner" />
                <div className="py-10 mx-auto flex flex-col items-center">
                    <Button className="mx-auto" text={'Try it for free'}></Button>
                </div>
            </div>

        </div>
    );
};

export default Banner;