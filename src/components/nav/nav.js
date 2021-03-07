
import React from "react";
import { PreloadingSwitch } from "react-easy-preload";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Preloader from '../preloader/preloader'
import Logo from '../assets/logo/logo'

import Work from '../../pages/work'
import About from '../../pages/about'
import Walgreens from '../../pages/walgreens'
import Castle from '../../pages/castle'
import Cardiact from '../../pages/cardiact'
import Taa from '../../pages/taa'
import Misc from '../../pages/misc'
import Gather from '../../pages/gather'
import Wotr from '../../pages/wotr'
import './style.scss'

const Nav = ( props ) => {
  const Loading = () => <Preloader />

	return(

		<Router>
      <div className="header">
        <nav>
        	<Link to="/"><Logo /></Link>
        	<div>
        		<Link to="/work"><strong>Work</strong></Link>
        		<Link to="/about"><strong>About</strong></Link>
            <a href="mailto:stobertg@gmail.com"><strong>Contact</strong></a>
        	</div>
        </nav>
      </div>

      <PreloadingSwitch loadingScreen={ Loading }>
        <Route preload exact path="/"><Work /></Route>
        <Route preload path="/work"><Work /></Route>
        <Route preload path="/about"><About /></Route>
        <Route preload path="/walgreens"><Walgreens /></Route>
        <Route preload path="/castle"><Castle /></Route>
        <Route preload path="/cardiact"><Cardiact /></Route>
        <Route preload path="/taa"><Taa /></Route>
        <Route preload path="/misc"><Misc /></Route>
        <Route preload path="/gather"><Gather /></Route>
        <Route preload path="/wotr"><Wotr /></Route>
      </PreloadingSwitch>
    </Router>

	)
}

export default Nav
