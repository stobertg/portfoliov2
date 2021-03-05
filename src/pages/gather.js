
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

import GatherAnimation from '../components/work/_projects/gather/animation/animation'
import Hero from '../images/gather/hero.jpg'
import Students from '../images/gather/students.jpg'
import AdminAssignment from '../images/gather/assignment-editor.jpg'
import ProfileEdit from '../images/gather/profile-edit.jpg'
import Assignment from '../images/gather/assignments.jpg'
import Library from '../images/gather/library.jpg'

const Gather = () => {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => { loading(); }, []);

  return (

  	<PageWrap
      illustration={ <GatherAnimation /> }
      title="Gather Web Application"
      subTitle="E-Learning Application for Grassroots Leadership"
    >

      <Block>
        <Fade bottom distance="200px">
          <Website 
            url="lsg.walgreens.com" 
            image={ Hero } 
            alt="Walgreens Live Style Guide"
          />
        </Fade>
      </Block> 
  
      <Block>
        <Fade bottom distance="32px">
          <PageInfo
            title="Creating a E-Learning Platform"
            descp={
              <div>
                <p>At Walgreens, my role is the creation, design, and front end development of the Live Style Guide (LSG), which governs the design and front end integrity of components that live throughout Walgreens.com. Other responsibilities include Front End Devlopement of Walgreens Homepage, header, and content tier pages. Other design responsibilties include icon development and experimental projects.</p>
                <p>As the lead on the LSG team since 2017, my efforts has been to bridge the design, dev, and accessability teams, which were previously siloed parts of the organization that have since been brought a bit closer under the common goal of the LSG.</p>
              </div>
            }
            project={[
              { project: 'Goldin Institute' },
              { project: '2017 - Present' }
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
          <HeroImg><Website image={ AdminAssignment } url="lsg.walgreens.com" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Students        } url="lsg.walgreens.com" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ ProfileEdit     } url="lsg.walgreens.com" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Assignment      } url="lsg.walgreens.com" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><Website image={ Library         } url="lsg.walgreens.com" alt="Walgreens Live Style Guide" /></HeroImg>
          <HeroImg><GatherIcons /></HeroImg>
        </Fade>
      </Block> 

	  </PageWrap>

  );
}

export default Gather
