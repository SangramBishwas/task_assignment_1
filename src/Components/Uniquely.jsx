import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";

const Uniquely = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24 py-12">
            <Heading heading={'Uniquely Mongolian: AI-Generated Faces'}></Heading>
            <div className="text-center px-10 md:px-40 lg:px-64">
            <Paragraph details={'Experience the power of AI tailored specifically for Mongolia with our innovative image generation model. Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that truly represent the unique features of our people.'}></Paragraph>
            </div>
            <div className="flex flex-col md:flex-row py-8 lg:py-16 items-center gap-12">
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-2 rounded-3xl" src="../../public/rec-1.jpg" alt="" />
                    <img className="col-span-2 rounded-3xl" src="../../public/rec-2.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-1 rounded-3xl" src="../../public/rec-3.jpg" alt="" />
                    <img className="col-span-1 rounded-3xl" src="../../public/rec-4.jpg" alt="" />
                    <img className="col-span-2 rounded-3xl" src="../../public/rec-5.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <img className="col-span-2 rounded-3xl" src="../../public/rec-6.jpg" alt="" />
                    <img className="col-span-1 rounded-3xl" src="../../public/rec-7.jpg" alt="" />
                    <img className="col-span-1 rounded-3xl" src="../../public/rec-8.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Uniquely;