import React , {useState , useEffect } from "react";
import { FaQuoteRight } from 'react-icons/fa';
// import NextBtn from "./nextbtn"
// import PrevBtn from "./prevbtn"
import { FiChevronRight , FiChevronLeft } from 'react-icons/fi';

const Slider = ({people})=> {

    // States 
    const [index , setIndex] = useState(0); 

    useEffect(()=> {
        if (index > people.length ) {
            setIndex(0)
        }
        if (index < 0) {
            setIndex(people.length - 1)
        }
    } , [index, people.length])

    return(
    <div className="section-center" >
        {
            people.map((person , personIndex) => {
                const {id , image , name , title , quote  } = person;
                let position = "nextSlide";

                if(personIndex === index) {
                    position = "activeSlide"
                }
                if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1 ) ) {
                    position = "lastSlide"
                }

                return <article key={id} className={position} >
                    <img src={image} alt={name} className="person-img" />
                    <h4>{name}</h4>
                    <p className="title" > {title} </p>
                    <p className="text" > {quote} </p>
                    <FaQuoteRight className="icon" />
                </article>

            })
        }

        <button type="button" className="prev" onClick={()=> setIndex(index - 1) } >
        <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={()=> setIndex(index + 1) } >
        <FiChevronRight />
        </button>
        

    </div>
    )

}

export default Slider;