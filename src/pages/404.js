
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

import PageWrap from '../components/page/page'

import Golem from '../images/global/404.mp4'

const NotFoundPage = () => {
  return(

  	<PageWrap className="404">
  		<div className="page__404--text">
	      <h1><strong>404</strong></h1>
	      <div><p>You're Drunk, <Link to="/">Go Home</Link></p></div>
	    </div>

      <div className="page__404--bg">
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 10 }
          tiltMaxAngleY={ 10 }
        >
          <div className="about__bg--content Tilt-inner">
            <video autoPlay muted loop src={ Golem } type="video/mp4" />
          </div>
        </Tilt>
      </div>
	  </PageWrap>

  )
}

export default NotFoundPage;
