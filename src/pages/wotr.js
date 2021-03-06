
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import ReactPlayer from "react-player"
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import PageInfo from '../components/page-info/page-info'
import HeroImg from '../components/hero/hero'
import NextProject from '../components/next-project/next-project'
import AnimationHorse from '../components/assets/horse/horse'

import FamilyTree from '../images/wotr/tree.svg'
import FamilyTreeFilled from '../images/wotr/treev2.jpg'
import RichardIII from '../images/wotr/richardiii.jpg'
import TAA from '../images/taa/designs/hero.jpg'

const Wotr = () => {
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
      illustration={ <AnimationHorse /> }
  		title="Wars of the Roses"
  		subTitle="Medieval Passion Project - Current WIP"
  	>

      <Block>
        <Fade bottom distance="150px">
          <HeroImg>
            <ReactPlayer
              url="https://www.youtube.com/embed/SxX5DU8CkFI"
              width="100%"
              height="500px"
            />
          </HeroImg>
        </Fade>
      </Block>

      <Fade bottom distance="150px">
        <Block>
          <PageInfo
            title="Yorkist, Lancastrians, and Tudors"
            descp={
              <div>
                <p>The Wars of the Roses was a Civil War in England, taking place on-and-off during the 1400s. As a result of the war, the Plantagenets were wiped out, and the reign of the Tudors began.</p>
                <p>History has always been a huge interest of mine, particularly Medieval. It's always been an aspiration to begin meshing design and history. Given my design skillset, my hope is to be able to contribute to Medieval history through visuals, design, and 3D models.</p>
                <p>For now, this is currently a work in progress, where I find time here and there to work on it. You can view the site by the link coming soon.</p>
              </div>
            }
            project={[
              { project: 'Personal' },
              { project: '2020 - Present' }
            ]}
            skills={[
              { skill: 'UI/UX Design' },
              { skill: 'Front End Development' },
            ]}
          />
        </Block>
      </Fade>

      <Fade bottom distance="150px">
        <Block bgColor="white">
          <HeroImg><img src={ FamilyTree } alt="Plantagenet Family Tree" /></HeroImg>
        </Block>
      </Fade>

      <Block>
        <Fade bottom distance="150px">
          <HeroImg><img src={ FamilyTreeFilled } alt="Plantagenet Family Tree" /></HeroImg>
          <HeroImg><img src={ RichardIII } alt="Plantagenet Family Tree" /></HeroImg>
        </Fade>
      </Block>
  	 
      <NextProject
        project="taa"
        title="The Apparel Agency"
        bgImg={ TAA }
        bgImgAlt="The Apparel Agency by Tyler Stober"
      />
	  </PageWrap>

  );
}

export default Wotr;
