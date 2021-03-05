
import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-easy-preload";
import loadData from "./fetchers";
import PageWrap from '../components/page/page'
import Block from '../components/page/page-block'
import Website from '../components/assets/devices/web/web'
import TaaHero from '../components/work/_projects/taa/hero/hero'

import Plans from '../images/taa/designs/plans.jpg'
import Collections from '../images/taa/designs/collection.jpg'
import Blog from '../images/taa/designs/blog.jpg'
import About from '../images/taa/designs/about.jpg'


const Taa = ( props ) => {
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

  const Images = [
    { image: Plans,       alt: 'TAA Plans Page'       },
    { image: Collections, alt: 'TAA Collections Page' },
    { image: Blog,        alt: 'TAA Blog Page'        },
    { image: About,       alt: 'TAA About Page'       }
  ]

  return (

  	<PageWrap>
      <TaaHero />

      { Images.map(( image, index ) =>

        <Block>
          <div className="hero__img">
            <Website 
              url="www.theapparelagency.com" 
              image={ image.image } 
              alt={ image.alt }
            />
          </div>
        </Block>

      )}

      <div className="taa__deco">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
	  </PageWrap>

  );
}

export default Taa;
