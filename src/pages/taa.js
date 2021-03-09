
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
import NextProject from '../components/next-project/next-project'

import Hero from '../images/taa/designs/hero.jpg'
import Plans from '../images/taa/designs/plans.jpg'
import Collections from '../images/taa/designs/collection.jpg'
import Blog from '../images/taa/designs/blog.jpg'
import About from '../images/taa/designs/about.jpg'
import Misc from '../images/misc/montage/map.jpg'

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
        <Fade bottom distance="200px" force="true">
          <HeroImg><Website url="www.theapparelagency.com" image={ Hero } alt="TAA Plans Page" /></HeroImg>
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="Threads for Days"
            descp={
              <div>
                <p>A standard project for creating a marketing website for The Apparel Agency in Chicago, IL. In addition to the design, I was tasked with developing the site in WordPress, creating a personalized theme, and writing PHP to handle content inputted by the agency.</p>
                <p>My main inspiration for the design was using the tools of the sowers to subtly incorporate into the site. Also at the time, the grid lines were a popular trend, and I utilized that trend as thread lines to relate back to sowing.</p>
              </div>
            }
            project={[
              { project: 'Doejo - 2016' },
            ]}
            skills={[
              { skill: 'UX/UI Design' },
              { skill: 'Front End Development' }
            ]}
          />
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="100px">
          <HeroImg><Website url="www.theapparelagency.com" image={ Plans } alt="TAA Plans Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ Collections } alt="TAA Collections Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ Blog } alt="TAA Blog Page" /></HeroImg>
          <HeroImg><Website url="www.theapparelagency.com" image={ About } alt="TAA About Page" /></HeroImg>
        </Fade>
      </Block>

      <div className="taa__deco">
        <ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
      </div>

      <NextProject
        project="misc"
        title="Miscellaneous"
        bgImg={ Misc }
        bgImgAlt="3D Map done by Tyler Stober"
      />
	  </PageWrap>

  );
}

export default Taa;
