import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Work from "./components/Work";

function App() {
    return (
        <>
            <Banner />
            <About />
            <Work />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
