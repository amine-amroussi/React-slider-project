import React from "react";
import { FiChevronRight } from 'react-icons/fi';

const NextBtn = ({nextIndex}) => {
    return (<button type="button" className="next" onClick={ ()=> nextIndex} >
        <FiChevronRight />
    </button>)
}

export default NextBtn;