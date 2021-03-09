
import React from "react";
import { PreloadingSwitch, topbar } from "react-easy-preload";
import { Redirect, BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ScrollToTop from './scrollToTop'
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
import NotFoundPage from '../../pages/404'
import './style.scss'

const Nav = ( props ) => {
  const Loading = () => <Preloader />

	return(

		<Router>
      <ScrollToTop />
      <div className="header">
        <nav>
        	<NavLink activeClassName="link__active" to="/"><Logo /></NavLink>
        	<div>
        		<NavLink activeClassName="link__active" to="/work"><strong>Work</strong></NavLink>
        		<NavLink activeClassName="link__active" to="/about"><strong>About</strong></NavLink>
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

        <Route path="*"><NotFoundPage /></Route>
      </PreloadingSwitch>
    </Router>

	)
}

topbar.config({
  barColors: {
    '0': 'rgba(243, 234, 25, .7)',
    '1.0': 'rgba(243, 234, 25,  1)'
  },
  shadowBlur: 0
});

export default Nav
