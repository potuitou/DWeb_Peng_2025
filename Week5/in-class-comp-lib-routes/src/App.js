
import {Routes, Route} from 'react-router-dom'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

const App = () => {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      Stuff always here - always exist

      <div className='col-span-5'>
       <Routes>
        <Route path='/' element={<ButtonPage/>}>
          Button
        </Route>
        <Route path='/accordion' element={<AccordionPage/>}>
          Accordion
        </Route>
        <Route path='/dropdown' element={<DropdownPage/>}>
          Dropdown
        </Route>
      </Routes>
    </div>
    </div>

    
   
  )
}

export default App
