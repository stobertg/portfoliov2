
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import HeroImg from '../components/hero/hero'
import PhonePresentation from '../components/work/phone-pres/presentation'
import PageInfo from '../components/page-info/page-info'
import Process from '../components/work/_projects/cardiact/process/process'
import NextProject from '../components/next-project/next-project'

import Poster from '../images/cardiact/poster/poster.jpg'
import StAlbans from '../images/castle/stalbans.jpg'

const Cardiact = () => {
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
      <Block><Fade><HeroImg><PhonePresentation /></HeroImg></Fade></Block> 

      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="A Response Effort for Vicitims of Cardiac Arrest"
            descp={
              <div>
                <p>CardiAct is a mobile application designed to reduce response time for victims of cardiac arrest by crowdsourcing assistance from CPR-certified individuals near a victim during an emergency. Pairing the application with a supported physical heart monitor will allow it to keep track of a user’s heart rate and detect any abnormalities. The app can even request help automatically if the victim is unresponsive.</p>
                <p>The application would be used by both the potential victims, and the potential responders. When a user requires emergency assistance, they can use the app to request help and responders within a 2 mile radius receives an alert with the victims name, address and estimated time it would take to reach them.</p>
              </div>
            }
            project={[
              { project: '2014 GRCD Directors Choice Awards' },
              { project: 'Senior Capstone' },
              { project: 'Collaboration with Geoff Burroughs' }
            ]}
            skills={[
              { skill: 'UX/UI Design of the mobile app' },
              { skill: 'Motion Piece' },
              { skill: 'HTML & Flash Prototype' }
            ]}
          />
        </Fade>
      </Block>

      <Block>
        <Fade bottom distance="32px">
          <HeroImg><img src={ Poster } alt="CardiAct Capstone Poster" /></HeroImg>
        </Fade>
      </Block>

      <Process />   

      <NextProject
        project="castle"
        title="The Castle for no Reason"
        bgImg={ StAlbans }
        bgImgAlt="St Albans Cathedral"
      />
	  </PageWrap>

  );
}

export default Cardiact
