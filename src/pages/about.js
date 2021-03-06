
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

import Bio from '../components/bio/bio'

import PageWrap from '../components/page/page'
import Turtles from '../images/global/turtles.mp4'

const About = () => {
  // eslint-disable-next-line
  const [state, setState] = useState( null );
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => { loading(); });

  return (

  	<PageWrap className="about">
      <Fade bottom distance="100px">
        <Bio />
      </Fade>

      <div className="about__bg">
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 10 }
          tiltMaxAngleY={ 10 }
        >
          <div className="about__bg--content Tilt-inner">
            <video autoPlay muted loop src={ Turtles } type="video/mp4" />
          </div>
        </Tilt>
      </div>
	  </PageWrap>

  );
}

export default About
