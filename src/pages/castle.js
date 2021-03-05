
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import PageInfo from '../components/page-info/page-info'
import HeroImg from '../components/hero/hero'

import Crest from '../images/castle/crest.png'
import CastleImg from '../images/castle/castle__hero.jpg'
import CastleEntrance from '../images/castle/castle__entrance.jpg'
import StAlbans from '../images/castle/stalbans.jpg'
import StMarks from '../images/castle/stmarks__tower.jpg'
import Tudor from '../images/castle/tudor.jpg'

const Castle = () => {
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
      logo={ Crest }
  		title="The Castle for no Reasoagjhfdk"
  		subTitle="The House of Doge - all day, all night"
  	>

      <Block>
        <Fade bottom>
          <HeroImg><img src={ CastleImg } alt="St Albans Cathedral" /></HeroImg>
        </Fade>
      </Block> 

      <Block>
        <Fade bottom distance="32px">
          <PageInfo
            title="The Lengend of the Doge"
            descp={
              <div>
                <p>During the late 1300s, John of Gaunt's bastard son, John the Doge, formed the House of Doge. It was said that this faction was created in secret, given his illegitamacy as a proper heir to any Plantagenet titles. While John of Gaunt's other sons were creating the House of Lancaster, York, Buckingham, Beaufort, March, and Somerset, John the Doge grew a bit bitter, vowing to create bigger and better shit than his relatives.</p>
                <p>Perhaps this was simply a pump-and-dump scheme, as John never recieved the riches as his legitiment brothers; after all, there was a death cross on the RSI and the hidden bearish divergence on the MACD. Yet through it all, John persisted - carving out land, gathering a following, even creating his own currency, decenturalizing the pound. Sooner or later, King Richard II took issue with his cousin's success, and began to come down on John with severe regulations.</p>
                <p>Refusing to comply, John issued a declaration of independance, which would be the precursor for The Peseants Revolt.</p>
                <p>Eventually John was captured, and faced trial for treason. He was sentenced to be hang, drawn, and quartered - he died in 1399. Although John the Doge eventually failed in life, his legacy lives on, as the legend of one of the best person, as well as currency, to ever live. These models are an attempt at a digital resteration of Stony Doge, which was destroyed to ruins during The Reformation.</p>
              </div>
            }
            project={[
              { project: '2017 - Present' }
            ]}
            skills={[
              { skill: 'Eye-balling it / Winging it' },
              { skill: '3D Modeling' },
              { skill: 'Cinema 4D' }
            ]}
          />
        </Fade>
      </Block>

  		<Block>
        <Fade bottom distance="32px">
          <HeroImg><img src={ StAlbans } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ StMarks } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ Tudor } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ CastleEntrance } alt="St Albans Cathedral" /></HeroImg>
        </Fade>
      </Block> 
   
	  </PageWrap>

  );
}

export default Castle;
