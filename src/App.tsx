import './App.css'
// import MiButtons from './components/MiButtons'
// import MiTextField from './components/MiTextField'

import MIRadio from "./components/MIRadio"
import MiAutocomplete from "./components/MiAutocomplete"
import MiBox from "./components/MiLayout"
import MiCheckbox from "./components/MiCheckbox"
import MiRating from "./components/MiRating"

import MiSelect from "./components/MiSelect"
import MiSwitch from "./components/MiSwitch"
import MiCard from './components/MiCard'
import MiAccordion from './components/MiAccordion'
import MiImageList from './components/MiImageList'
import MiNavbar from './components/MiNavbar'
import MiLink from './components/MiLink'
import MuiBreadcrumbs from './components/MuiBreadcrumbs'
import MiDrawer from './components/MiDrawer'
import MiSpeedDial from './components/MiSpeedDial'
import MiBottomNavigation from './components/MiBottomNavigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MiAvatar from './components/MiAvatar'
import Mibadge from './components/Mibadge'
function App() {

  return (
    <BrowserRouter>
      {/* <MiButtons/> */}
      {/* <MiTextField/> */}
      {/* <MiSelect/> */}
      {/* <MIRadio/> */}
      {/* <hr /> */}
      {/* <MiCheckbox/> */}
      {/* <hr /> */}
      {/* <hr /> */}
      {/* <MiSwitch /> */}
      {/* <MiRating/> */}
      {/* <MiAutocomplete/> */}
      {/* <MiBox/> */}
      {/* <MiCard/> */}
      {/* <MiAccordion/> */}
      {/* <MiImageList/> */}
      <MiNavbar/>
      {/* <MiLink/> */}
      {/* <MuiBreadcrumbs/> */}
      <MiDrawer/>
      {/* <MiSpeedDial/> */}
      <MiBottomNavigation/>
      {/* <MiAvatar/> */}
      <Mibadge/>
    </BrowserRouter>
  )
}

export default App
