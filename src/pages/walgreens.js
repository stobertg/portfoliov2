
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import PageInfo from '../components/page-info/page-info'
import Block from '../components/page/page-block'
import Website from '../components/assets/devices/web/web'
import WagGui from '../components/work/_projects/wag/gui/gui'
import WagIcons from '../components/work/_projects/wag/icons/icons'

import WagCoupon from '../images/wag/heros/coupons.jpg'
import WagHero from '../images/wag/heros/site.jpg'
import IllusManWithWallet from '../components/work/_projects/wag/illustration/man-with-wallet'

const Walgreens = () => {
  // eslint-disable-next-line
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => { loading(); });

  return (

  	<PageWrap
  		illustration={ <IllusManWithWallet /> }
  		title="Walgreens Brand Standards"
  		subTitle="Design, Live Style Guide, Front End Development"
  		buttonTitle="Visit the Style Guide"
  		buttonLink="#!"
  	>

  		<Block>
        <Fade bottom distance="200px">
          <Website url="lsg.walgreens.com" image={ WagCoupon } alt="Walgreens Live Style Guide" />
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="Bridging Design and Front End"
            descp={
              <div>
                <p>At Walgreens, my role is the creation, design, and front end development of the Live Style Guide (LSG), which governs the design and front end integrity of components that live throughout Walgreens.com. Other responsibilities include Front End Devlopement of Walgreens Homepage, header, and content tier pages. Other design responsibilties include icon development and experimental projects.</p>
                <p>As the lead on the LSG team since 2017, my efforts has been to bridge the design, dev, and accessability teams, which were previously siloed parts of the organization that have since been brought a bit closer under the common goal of the LSG.</p>
              </div>
            }
            project={[
              { project: 'Full Time - Walgreens' },
              { project: '2017 - Present' }
            ]}
            skills={[
              { skill: 'LSG Leadership' },
              { skill: 'UI/UX Design' },
              { skill: 'Front End Development' },
              { skill: 'Accessibility' }
            ]}
          />
        </Fade>
      </Block>

      <Block type="full" bgColor="white" spacing="large">
        <Fade>
          <WagGui />
        </Fade>
      </Block>

      <Block type="full" bgColor="dark-blue" spacing="large">
        <Fade bottom distance="32px">
          <WagIcons />
        </Fade>
      </Block>

		  <Block spacing="large">
        <Fade bottom distance="32px">
          <Website url="walgreens.com" image={ WagHero } alt="Walgreens Homepage" />
        </Fade>
      </Block>      
	  </PageWrap>

  );
}

export default Walgreens;
