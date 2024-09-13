import Banner from "./Components/Banner";
import MonaAI from "./Components/MonaAI";
import Nav from "./Nav";
const Root = () => {
    return (
        <div className="bg-[url('/public/vector-banner-bg.jpg')] min-h-screen bg-cover">
            <Nav />
            <Banner />
            <MonaAI />
        </div>
    );
};

export default Root;