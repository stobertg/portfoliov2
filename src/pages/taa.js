
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import PageInfo from '../components/page-info/page-info'
import Block from '../components/page/page-block'
import Website from '../components/assets/devices/web/web'
import TaaHero from '../components/work/_projects/taa/hero/hero'
import HeroImg from '../components/hero/hero'

import Hero from '../images/taa/designs/hero.jpg'
import Plans from '../images/taa/designs/plans.jpg'
import Collections from '../images/taa/designs/collection.jpg'
import Blog from '../images/taa/designs/blog.jpg'
import About from '../images/taa/designs/about.jpg'


const Taa = () => {
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

  	<PageWrap>

      <TaaHero />

      <Block>
        <Fade bottom>
          <HeroImg><Website url="www.theapparelagency.com" image={ Hero } alt="TAA Plans Page" /></HeroImg>
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="32px">
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

      <Block>
        <Fade bottom distance="32px">
          <HeroImg><Website url="www.theapparelagency.com" image={ Plans } alt="TAA Plans Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ Collections } alt="TAA Collections Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ Blog } alt="TAA Blog Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ About } alt="TAA About Page" /></HeroImg>
        </Fade>
      </Block>

      <div className="taa__deco">
        <ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
      </div>
	  </PageWrap>

  );
}

export default Taa;
