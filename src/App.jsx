
import WebDevelop from './Pages/WebDevelop';
import GraphicDesign from './Pages/GraphicDesign';
import MobileApp from './Pages/MobileApp';
import SoftwareDev from './Pages/SoftwareDev';
import Blockchain from './Pages/Blockchain';
import Seo from './Pages/Seo';
import Ecommerce from './Pages/Ecommerce';
import NFT from './Pages/NFT';
import ArtificialIntel from './Pages/ArtificialIntel';
import AIIntelBlog from './Pages/AIIntelBlog';
import AIIntelBlog1 from './Pages/AIIntelBlog1';


import Home from './Pages/Home';


import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blogs';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/web-design-&-development' element={<WebDevelop/>}/>
        <Route path='/graphic-designing' element={<GraphicDesign/>}/>
        <Route path='/mobile-app-design-&-development' element={<MobileApp/>}/>
        <Route path='/software-development' element={<SoftwareDev/>}/>
        <Route path='/blockchain-development' element={<Blockchain/>}/>
        <Route exact path='/search-enigne-optimization' element={<Seo/>}/>
        <Route exact path='/ecommerce' element={<Ecommerce/>}/>
        <Route exact path='/nft' element={<NFT/>}/>
        <Route exact path='/artificial-intelligence' element={<ArtificialIntel/>}/>
        <Route exact path='/about-us' element={<About/>}/>
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/artficial-intelligence' element={<AIIntelBlog/>}/>
        <Route exact path='/artficial-intelligence1' element={<AIIntelBlog1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
