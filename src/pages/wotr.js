
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import PageWrap from '../components/page/page'

const Wotr = () => {
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
  		title="Walgreens Brand Standards"
  		subTitle="Design, Live Style Guide, Front End Development"
  		buttonTitle="Visit the Style Guide"
  		buttonLink="#!"
  	>

  		    
	  </PageWrap>

  );
}

export default Wotr;
