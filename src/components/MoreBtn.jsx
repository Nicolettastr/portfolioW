import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const MoreBtn = () => {
    return (
        <div className='d-flex w-100 d-row justify-center align-center'>
            <h3 className='gl-title more_btn_title'>
                Discover More <MdKeyboardArrowRight className='about-icon' />
            </h3>
            <button className='moreBtn'>More</button>
        </div>
    );
};

export default MoreBtn;
