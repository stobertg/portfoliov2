
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import Fade from 'react-reveal/Fade';

import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import HeroImg from '../components/hero/hero'
import NextProject from '../components/next-project/next-project'

import Zorch from '../images/misc/zorch/get.jpg'
import MontageMap from '../images/misc/montage/map.jpg'
import McMicken from '../images/misc/mc/hero.jpg'
import United from '../images/misc/united/hero.mp4'
import Pronto from '../images/misc/pronto/main.mp4'
import ZorchVid from '../images/misc/zorch/hero.mp4'
import MontageVid from '../images/misc/montage/hero.mp4'
import Gather from '../images/gather/hero.jpg'

const Misc = () => {
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
      title="Miscellaneous"
      subTitle="A bit of this, a bit of that - compliation of Motion and 3D"
    >

      <Block>
        <Fade bottom distance="200px" force="true">
          <HeroImg><img src={ MontageMap } alt="" /></HeroImg>
        </Fade>

        <Fade bottom distance="100px">
          <HeroImg><img src={ McMicken } alt="" /></HeroImg>
          <HeroImg><img src={ Zorch } alt="" /></HeroImg>
          <HeroImg><video controls muted loop src={ United } type="video/mp4" /></HeroImg>
          <HeroImg><video controls muted loop src={ MontageVid } type="video/mp4" /></HeroImg>
          <HeroImg><video controls muted loop src={ Pronto } type="video/mp4" /></HeroImg>
          <HeroImg><video controls muted loop src={ ZorchVid } type="video/mp4" /></HeroImg>
        </Fade>
      </Block> 

      <NextProject
        project="gather"
        title="Gather E-learning Platform"
        bgImg={ Gather }
        bgImgAlt="Gather Goldin Institute"
      />
	  </PageWrap>

  );
}

export default Misc;
