import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";
import youtube_left from "../../public/youtube-service-left.png";
import youtube_right from "../../public/youtube-service-right.png";
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
                <img className="w-full lg:w-[512px] lg:h-[502px]" src={youtube_right} width={512} height={502} alt="youtube-services" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-24 py-10">
                <div>
                    <Heading subHeading={'Standard Translation'}></Heading>
                    <Paragraph details={'Our Standard Translation service offers a cost-effective way to enjoy YouTube videos in Mongolian. While it may occasionally have minor inaccuracies, it provides a good overall understanding of the content. Perfect for casual viewing and when quick, budget-friendly translation is needed.'}></Paragraph>
                    <div className="py-6 w-full lg:w-1/3">
                        <Button text={'Try Now'}></Button>
                    </div>
                </div>
                <img className="w-full lg:w-[512px] lg:h-[502px]" src={youtube_left} width={512} height={502} alt="youtube-services" />
            </div>
        </div>
    );
};

export default YtTranslation;