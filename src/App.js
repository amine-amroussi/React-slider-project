import React, { useState } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

import Slider from "./slider"

function App() {

  const [people ] = useState(data);

  return <section className="section" >
    <div className="title" >
      <h2>
        <span >/</span>
        Reviews
      </h2>
    </div>
    <Slider people={people} />
  </section>;
}

export default App;
