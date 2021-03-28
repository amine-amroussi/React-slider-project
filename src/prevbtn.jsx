import React from "react";
import { FiChevronLeft } from 'react-icons/fi';

const NextBtn = ({prevIndex}) => {
    return (<button type="button" className="prev" onClick={()=> prevIndex} >
        <FiChevronLeft />
    </button>)
}

export default NextBtn;