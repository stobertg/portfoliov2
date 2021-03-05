
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Social from '../components/social/social'

import Logo from '../images/cardiact/hero/logo.svg'
import Poster from '../images/cardiact/poster/poster.jpg'
import Turtles from '../images/global/turtles.mp4'
import Resume from '../images/global/stobert_resume.pdf'

const About = () => {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => { loading(); }, []);

  return (

  	<PageWrap className="about">
      <Fade bottom distance="100px">
        <div className="about__contain"> 
          <div className="about__title">
            <h1><strong>Tyler Stober; Jack all, master dumb</strong></h1>
          </div>

          <div className="about__descp">
            <p>Chicago based multidisciplinary designer with a primary background in User Experience, User Interface design and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and execution of digital assets through multiple mediums.</p>
            <p>Made in <a href="https://en.wikipedia.org/wiki/Bethel,_Ohio" target="_blank">small town</a> Ohio, educated at <a href="https://en.wikipedia.org/wiki/University_of_Cincinnati_College_of_Design,_Architecture,_Art,_and_Planning" target="_blank">DAAP</a> at U of Cincy, professionally developed in NYC and Chicago. Appreciator of <a href="https://www.pinterest.com/stobertg/user-interfaces/" target="_blank">design</a>, <a href="https://www.pinterest.com/stobertg/history/" target="_blank">history</a>, <a href="https://www.pinterest.com/stobertg/medieval-architecture/" target="_blank">architecture</a>, <a href="https://www.pinterest.com/stobertg/cinema4d/" target="_blank">3D</a>, and well done <a href="https://www.pinterest.com/stobertg/experiences/" target="_blank">experiences</a>.</p>
            <p><a href={ Resume } target="_blank">Résumé</a></p>
          </div>

          <Social 
            dribbble="https://dribbble.com/stobertg"
            instagram="https://www.instagram.com/ttylerer/"
            medium="https://medium.com/@TylerStober"
            codepen="http://codepen.io/stobertg/"
            linkedIn="https://www.linkedin.com/in/tyler-stober-4010974a"
          />
        </div>
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
