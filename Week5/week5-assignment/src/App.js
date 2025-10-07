import React from "react";
import {Routes, Route} from 'react-router-dom'
import AccordionFancyPage1 from './pages/AccordionFancyPage1'
import AccordionFancyPage2 from './pages/AccordionFancyPage2'


import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Navbar />
      {/* navbar exists outside of our route list so its just there all the time */}
      <div className="col-span-5">
        <Routes>
          {/* <Route path="/" element={<ButtonPage />} /> */}
          <Route path="/accordion1" element={<AccordionFancyPage1 />} />
          <Route path="/accordion2" element={<AccordionFancyPage2 />} />
          {/* <Route path="/dropdown" element={<DropdownPage />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
