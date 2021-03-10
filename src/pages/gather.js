
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import PageInfo from '../components/page-info/page-info'
import HeroImg from '../components/hero/hero'
import Website from '../components/assets/devices/web/web'
import GatherIcons from '../components/work/_projects/gather/icons/icons'
import NextProject from '../components/next-project/next-project'

import GatherAnimation from '../components/work/_projects/gather/animation/animation'
import Hero from '../images/gather/hero.jpg'
import Students from '../images/gather/students.jpg'
import AdminAssignment from '../images/gather/assignment-editor.jpg'
import ProfileEdit from '../images/gather/profile-edit.jpg'
import Assignment from '../images/gather/assignments.jpg'
import Library from '../images/gather/library.jpg'
import Walgreens from '../images/wag/heros/gui2.jpg'

const Gather = () => {
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
      illustration={ <GatherAnimation /> }
      title="Gather Web Application"
      subTitle="E-Learning Application for Grassroots Leadership"
    >

      <Block>
        <Fade bottom distance="200px" force="true">
          <Website 
            url="gather.goldininstitute.org" 
            image={ Hero } 
            alt="Walgreens Live Style Guide"
          />
        </Fade>
      </Block> 
  
      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="Creating a E-Learning Platform"
            descp={
              <div>
                <p>Gather is both a mobile platform for shared learning and a curriculum for people who want to build on the talents of their neighbors and the assets of their communities to make real and lasting change. Participants in Gather learn and work together through an innovative curriculum that comes pre-loaded on a tablet device with all the connectivity materials videos practices and tools necessary to provide a mobile classroom and toolkit for community leadership.</p>
                <p>My role is the sole designer and front-end developer of the Gather platform, working with a back-end dev to implement Gather as a fully functional application.</p>
              </div>
            }
            project={[
              { project: 'Goldin Institute: 2017 - Present' },
              { project: 'Founder - Travis Rejman' },
              { project: 'Back End Dev - Faraj Khasib' },
            ]}
            skills={[
              { skill: 'UI/UX Design' },
              { skill: 'Front End Development' },
              { skill: 'Accessibility' }
            ]}
          />
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="32px">
          <HeroImg><Website image={ AdminAssignment } url="gather.goldininstitute.org" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Students        } url="gather.goldininstitute.org" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ ProfileEdit     } url="gather.goldininstitute.org" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Assignment      } url="gather.goldininstitute.org" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Library         } url="gather.goldininstitute.org" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><GatherIcons /></HeroImg>
        </Fade>
      </Block> 

      <NextProject
        project="walgreens"
        title="Walgreens Live Style Guide"
        bgImg={ Walgreens }
        bgImgAlt="Walgreens Live Style Guide"
      />
	  </PageWrap>

  );
}

export default Gather
