
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Tilt from 'react-parallax-tilt';

import PageWrap from '../components/page/page'
import Website from '../components/assets/devices/web/web'
import '../components/work/style.scss'

import Gather from '../images/gather/hero.jpg'
import Walgreens from '../images/wag/heros/coupons.jpg'
import Cardiact from '../images/cardiact/hero/hero.jpg'
import StAlbans from '../images/castle/stalbans.jpg'
import Taa from '../images/taa/designs/hero.jpg'
import Misc from '../images/misc/montage/map.jpg'

const Work = () => {
  // eslint-disable-next-line
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => { loading(); });

  const images = [
    { id: 0, image: Gather, alt: "This is the Alt text" },
    { id: 1, image: Walgreens, alt: "This is the Alt text" },
    { id: 2, image: Cardiact, alt: "This is the Alt text" },
    { id: 3, image: StAlbans, alt: "This is the Alt text" },
    { id: 4, image: Taa, alt: "This is the Alt text" },
    { id: 5, image: Misc, alt: "This is the Alt text" }
  ];
  const [ image, setImage ] = useState( images[0].image ); 
  
  return (

  	<PageWrap className="work">
      <div className="project__bg">
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 10 }
          tiltMaxAngleY={ 10 }
        >
          <div className="Tilt-inner">
            <Website><img src={ image } alt="Tyler Stober Design Portfolio Chicago" /></Website>
          </div>
        </Tilt>
      </div>

      <div className="work__list">
    		<ul>
          <li><Link onMouseEnter={ () => setImage( images[0].image ) } to="/gather"><strong>Gather</strong></Link></li>
          <li><Link onMouseEnter={ () => setImage( images[1].image ) } to="/walgreens"><strong>Walgreens</strong></Link></li>
          <li><Link onMouseEnter={ () => setImage( images[2].image ) } to="/cardiact"><strong>CardiAct</strong></Link></li>
          <li><Link onMouseEnter={ () => setImage( images[3].image ) } to="/castle"><strong>Castle for no Reason</strong></Link></li>
          <li><Link to="/wotr"><strong>Wars of the Roses</strong></Link></li>
          <li><Link onMouseEnter={ () => setImage( images[4].image ) } to="/taa"><strong>The Apparel Agency</strong></Link></li>
          <li><Link onMouseEnter={ () => setImage( images[5].image ) } to="/misc"><strong>Misc</strong></Link></li>
        </ul>
      </div>
	  </PageWrap>

  )
}

export default Work;
