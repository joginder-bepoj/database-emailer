import React from 'react'
import "./css/bootstrap.css"
// import "./css/bootstrapASH.min.css"
// import "./css/contentslider.css"
import "./css/global.css"
import "./css/ie_style.css"
import "./css/igor.css"
import "./css/indexCSS.css"
import "./css/indexSlider.css"
import "./css/screen.css"
import "./css/searchStyles.css"
import "./css/searchStylesASH.css"
import "./css/styleASH.css"
import "./css/styles_simple_table.css"
import "./css/styles.css"
import "./css/style.css"
import "./css/stylesheet__.css"
import "./css/stylesheet_.css"
import "./css/stylesheet.css"
import "./css/stylesheetNEW.css"
import "./css/stylesheetNEWER.css"
import "./css/tabs.css"
import CheckConsumer from './components/CheckConsumer';
import PathsShow from './components/PathsShow';
import {Routes, Route} from "react-router-dom"
import CheckBusiness from './components/CheckBusiness';
import CheckLinkedIn from './components/CheckLinkedIn';
import BadData from './components/BadData';
import CellPhoneData from './components/CellPhoneData';
import NewMovers from './components/NewMovers';
import URLdata from './components/URLdata';
import TelemarketingConsumer from './components/TelemarketingConsumer';
import Navbar from './components/home/Navbar'

function App() {
  return (
    <>
        <Navbar />
        <PathsShow />
        <Routes>
          <Route path="/database-emailer/" element={<CheckConsumer />} />
          <Route path="/database-emailer/checkbuisness" element={<CheckBusiness />} />
          <Route path="/database-emailer/checklinkedin" element={<CheckLinkedIn />} />
          <Route path="/database-emailer/baddata" element={<BadData />} />
          <Route path="/database-emailer/cellphonedata" element={<CellPhoneData />} />
          <Route path="/database-emailer/newmovers" element={<NewMovers />} />
          <Route path="/database-emailer/urldata" element={<URLdata />} />
          <Route path="/database-emailer/telemarketing" element={<TelemarketingConsumer />} />
        </Routes>
    </>
  );
}

export default App;
