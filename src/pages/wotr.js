
// Page level structure
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import Website from '../components/assets/devices/web/web'
import WagIcons from '../components/work/_projects/wag/icons/icons'

// Images within the page

import WagLogo from '../images/wag/global/logo-mark.svg'
import WagCoupon from '../images/wag/heros/coupons.jpg'
import WagGui from '../images/wag/heros/gui.jpg'
import WagHero from '../images/wag/heros/site.jpg'
import IllusManWithWallet from '../components/work/_projects/wag/components/illustrations/man-with-wallet/man-with-wallet'

const Wotr = () => {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);

  return (

  	<PageWrap
  		illustration={ <IllusManWithWallet /> }
  		title="Walgreens Brand Standards"
  		subTitle="Design, Live Style Guide, Front End Development"
  		buttonTitle="Visit the Style Guide"
  		buttonLink="#!"
  	>

  		<Block>
        <Website 
          url="lsg.walgreens.com" 
          image={ WagCoupon } 
          alt="Walgreens Live Style Guide"
        />
      </Block>

      <Block>
        <div className="page__info">
          <div className="page__info--content">
            <div className="page__info--title"><h3><strong>Bridging Design and Front End</strong></h3></div>
            <p>At Walgreens, my role is the creation, design, and front end development of the Live Style Guide (LSG), which governs the design and front end integrity of components that live throughout Walgreens.com. Other responsibilities include Front End Devlopement of Walgreens Homepage, header, and content tier pages. Other design responsibilties include icon development and experimental projects.</p>
            <p>As the lead on the LSG team since 2017, my efforts has been to bridge the design, dev, and accessability teams, which were previously siloed parts of the organization that have since been brought a bit closer under the common goal of the LSG.</p>

            <div className="page__info--details">
              <div className="page__info--list">
                <div><h4><strong>Roles / Skills</strong></h4></div>
                <ul>
                  <li>LSG Leadership</li>
                  <li>UI Design</li>
                  <li>Front End Development</li>
                  <li>Accessibility</li>
                </ul>
              </div>

              <div className="page__info--list">
                <div><h4><strong>Project</strong></h4></div>
                <ul>
                  <li>Full Time - Walgreens</li>
                  <li>2017 - Present</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Block>

      <Block type="full" bgColor="white" spacing="large">
        <div className="gui">
          <img style={{ width: 5000 }} src={ WagGui } />
        </div>
      </Block>

      <Block type="full" bgColor="dark-blue" spacing="large">
        <WagIcons />
      </Block>

		  <Block spacing="large">
        <Website url="walgreens.com" image={ WagHero } alt="Walgreens Homepage" />
      </Block>      
	  </PageWrap>

  );
}

export default Wotr;
