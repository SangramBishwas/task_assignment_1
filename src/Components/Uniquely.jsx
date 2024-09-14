import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";
import rec_1 from "../../public/rec-1.jpg"
import rec_2 from "../../public/rec-2.jpg"
import rec_3 from "../../public/rec-3.jpg"
import rec_4 from "../../public/rec-4.jpg"
import rec_5 from "../../public/rec-5.jpg"
import rec_6 from "../../public/rec-6.jpg"
import rec_7 from "../../public/rec-7.jpg"
import rec_8 from "../../public/rec-8.jpg"
const Uniquely = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24 py-12">
            <Heading heading={'Uniquely Mongolian: AI-Generated Faces'}></Heading>
            <div className="text-center px-10 md:px-40 lg:px-64">
            <Paragraph details={'Experience the power of AI tailored specifically for Mongolia with our innovative image generation model. Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that truly represent the unique features of our people.'}></Paragraph>
            </div>
            <div className="flex flex-col md:flex-row py-8 lg:py-16 items-center gap-12">
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-2 rounded-3xl" src={rec_1} alt="" />
                    <img className="col-span-2 rounded-3xl" src={rec_2} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-1 rounded-3xl" src={rec_3} alt="" />
                    <img className="col-span-1 rounded-3xl" src={rec_4} alt="" />
                    <img className="col-span-2 rounded-3xl" src={rec_5} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-2 rounded-3xl" src={rec_6} alt="" />
                    <img className="col-span-1 rounded-3xl" src={rec_7} alt="" />
                    <img className="col-span-1 rounded-3xl" src={rec_8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Uniquely;