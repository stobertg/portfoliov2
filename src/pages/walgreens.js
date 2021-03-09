
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
import NextProject from '../components/next-project/next-project'

import WagCoupon from '../images/wag/heros/coupons.jpg'
import Homepage from '../images/wag/heros/site.jpg'
import IllusManWithWallet from '../components/work/_projects/wag/illustration/man-with-wallet'
import CardiAct from '../images/cardiact/hero/hero.jpg'

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
  	>

  		<Block>
        <Fade bottom distance="200px" force="true">
          <Website url="lsg.walgreens.com" image={ WagCoupon } alt="Walgreens Live Style Guide" />
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="Design and Front End"
            descp={
              <div>
                <p>At Walgreens, my current role is the designer and developer for the Walgreens Live Style Guide, promoting the design and front-end integrity of foundational components that support Walgreens.com. In addition, front-end developer of the Walgreens.com homepage and designer of Walgreen's functional icons.</p>
                <p>As the lead on the LSG team since 2017, my efforts have been to bridge the design, dev, and accessibility teams, which were previously siloed parts of the organization.</p>
                <p>As Walgreens transitions to React JS and new branding, my team has led the efforts to design GUI components, standardize and create a Live Style Guide, as well as accessible front-end components to preserve design integrity and maintenance.</p>
              </div>
            }
            project={[
              { project: 'Full Time - Walgreens' },
              { project: '2017 - Present' },
              { project: 'Stefan Clark - ACD' },
              { project: 'Mike Pruim, Ryne Estwig, Akemi Hong' }
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

      <Block type="full" spacing="large">
        <Fade bottom distance="32px">
          <WagIcons />
        </Fade>
      </Block>

		  <Block> 
        <Fade>
          <Website 
            url="walgreens.com"
            image={ Homepage }
            alt="Walgreens Homepage"
          />
        </Fade>
      </Block>      

      <NextProject
        project="cardiact"
        title="CardiAct - Techincal Response to Cardiac Arrests"
        bgImg={ CardiAct }
        bgImgAlt="CardiAct from Tyler Stober and Geoff Burroughs"
      />
	  </PageWrap>

  );
}

export default Walgreens;
