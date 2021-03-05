
// Page level structure
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'

// Images within the page

import Zorch from '../images/misc/zorch/get.jpg'
import MontageMap from '../images/misc/montage/map.jpg'
import McMicken from '../images/misc/mc/hero.jpg'
import United from '../images/misc/united/hero.mp4'
import Pronto from '../images/misc/pronto/main.mp4'
import ZorchVid from '../images/misc/zorch/hero.mp4'
import MontageVid from '../images/misc/montage/hero.mp4'

function Misc() {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);

  return (

  	<PageWrap
      title="Miscellaneous"
      subTitle="Odds and ends over the years - compliation of Motion and 3D"
    >

      <Block>
        <div className="hero__img">
          <img src={ MontageMap } alt="" />
        </div>

        <div className="hero__img">
          <img src={ McMicken } alt="" />
        </div>

        <div className="hero__img">
          <img src={ Zorch } alt="" />
        </div>

        <div className="hero__img">
          <video controls muted loop src={ United } type="video/mp4" />
        </div>

        <div className="hero__img">
          <video controls muted loop src={ MontageVid } type="video/mp4" />
        </div>

        <div className="hero__img">
          <video controls muted loop src={ Pronto } type="video/mp4" />
        </div>

        <div className="hero__img">
          <video controls muted loop src={ ZorchVid } type="video/mp4" />
        </div>
      </Block> 
 
	  </PageWrap>

  );
}

export default Misc;
