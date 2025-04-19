import React, { useEffect, useState } from "react";
import "../styles/about.css";
import MoreBtn from "./MoreBtn";

const About = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("./aboutMePre.txt")
            .then((res) => res.text())
            .then((data) => setText(data))
            .catch((error) => console.error("Error fetching the text", error));
    }, []);

    return (
        <>
            <div className='text vw-100 d-flex d-column'>
                <h3 className='gl-title'>Just a Bit About Me</h3>
                <p>{text}</p>
                <MoreBtn />
            </div>
        </>
    );
};

export default About;
