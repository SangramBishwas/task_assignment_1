import Banner from "./Components/Banner";
import MonaAI from "./Components/MonaAI";
import Uniquely from "./Components/Uniquely";
import YtTranslation from "./Components/YtTranslation";
import Nav from "./Nav";
const Root = () => {
    return (
        <div>
            <div className="bg-[url('/public/vector-banner-bg.jpg')] min-h-screen bg-cover bg-fixed">
                <Nav />
                <Banner />
            </div>
            <MonaAI />
            <YtTranslation />
            <Uniquely />
        </div>
    );
};

export default Root;