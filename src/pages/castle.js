
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import PageInfo from '../components/page-info/page-info'
import HeroImg from '../components/hero/hero'
import NextProject from '../components/next-project/next-project'

import Crest from '../images/castle/crest.png'
import CastleImg from '../images/castle/castle__hero.jpg'
import CastleEntrance from '../images/castle/castle__entrance.jpg'
import StAlbans from '../images/castle/stalbans.jpg'
import StMarks from '../images/castle/stmarks__tower.jpg'
import Tudor from '../images/castle/tudor.jpg'
import Wotr from '../images/castle/tudor.jpg'

const Castle = () => {
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
      logo={ Crest }
  		title="The Castle for no Reasoagjhfdk"
  		subTitle="The House of Doge - all day, all night"
  	>

      <Block>
        <Fade bottom distance="200px" force="true">
          <HeroImg><img src={ CastleImg } alt="St Albans Cathedral" /></HeroImg>
        </Fade>
      </Block> 

      <Block>
        <Fade bottom distance="150px">
          <PageInfo
            title="The Lengend of the Doge"
            descp={
              <div>
                <p>During the late 1300s, John of Gaunt's bastard son, John the Doge, formed the House of Doge. It was said that this faction was created in secret, given his illegitimacy as a proper heir to any Plantagenet titles. While John of Gaunt's other sons were creating the House of Lancaster, York, Buckingham, Beaufort, March, and Somerset, John the Doge grew a bit bitter, vowing to be bigger and better than his relatives.</p>
                <p>Perhaps this was simply a pump-and-dump scheme, as John never received the riches as his legitimate brothers; after all, there was obvious hidden bearish divergence. Yet through it all, John persisted - carving out his land, gathering a following, even creating his own currency, decentralizing the pound. Sooner or later, King Richard II took issue with his cousin's success and began to come down on John with severe regulations.</p>
                <p>Refusing to comply, John issued Magna Doge against the King, which would prove to be the kick-starter for The Peasants Revolt.</p>
                <p>Eventually, John was captured and faced trial for treason. He was sentenced to be hang, drawn, and quartered - he died in 1399. Although John the Doge eventually failed in life, his legacy lives on, as a legend and currency. These models are an attempt at a digital restoration of Stony Doge, which was destroyed during The Reformation. Does anyone even read these things? Props if you lasted this long - scroll down to see pictures.</p>
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
        <Fade bottom distance="100px">
          <HeroImg><img src={ StAlbans } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ StMarks } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ Tudor } alt="St Albans Cathedral" /></HeroImg>
          <HeroImg><img src={ CastleEntrance } alt="St Albans Cathedral" /></HeroImg>
        </Fade>
      </Block> 

      <NextProject
        project="wotr"
        title="Wars of the Roses"
        bgImg={ Wotr }
        bgImgAlt="Wars of the Roses by Tyler Stober"
      />
	  </PageWrap>

  );
}

export default Castle;
