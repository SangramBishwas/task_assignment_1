import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";

const YtTranslation = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24 py-12">
            <Heading heading={'YouTube Translation: Two Tiers to Suit Your Needs'}></Heading>
            <div className="flex flex-col lg:flex-row items-center lg:gap-24 py-10">
                <div>
                    <Heading subHeading={'Best Translation'}></Heading>
                    <Paragraph details={'Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.'}></Paragraph>
                    <div className="py-6 w-full lg:w-1/3">
                        <Button text={'Try Now'}></Button>
                    </div>
                </div>
                <img className="w-full lg:w-[512px] lg:h-[502px]" src="../../public/youtube-service-right.png" width={512} height={502} alt="youtube-services" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-24 py-10">
                <div>
                    <Heading subHeading={'Best Translation'}></Heading>
                    <Paragraph details={'Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.'}></Paragraph>
                    <div className="py-6 w-full lg:w-1/3">
                        <Button text={'Try Now'}></Button>
                    </div>
                </div>
                <img className="w-full lg:w-[512px] lg:h-[502px]" src="../../public/youtube-service-left.png" width={512} height={502} alt="youtube-services" />
            </div>
        </div>
    );
};

export default YtTranslation;