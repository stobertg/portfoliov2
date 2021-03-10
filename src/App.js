
import React, { useState, useEffect } from 'react'
import Nav from './components/nav/nav'
import Preloader from './components/preloader/preloader'

const App = () => {
	const [ isLoading, setIsLoading ] = useState( true );
  const cacheImages = async ( srcArray ) => {
    const promises = await srcArray.map(( src ) => {
      return new Promise( function ( resolve, reject ) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all( promises );
    setIsLoading( false );
  }

  useEffect(() => { 
    const imgs = [

    	// Homepage

			'./images/gather/hero.jpg',
			'./images/wag/heros/coupons.jpg',
			'./images/cardiact/hero/hero.jpg',
			'./images/castle/stalbans.jpg',
			'./images/wotr/treev2.jpg',
			'./images/taa/designs/hero.jpg',
			'./images/misc/montage/map.jpg',

      // Gather

			'./images/gather/students.jpg',
			'./images/gather/assignment-editor.jpg',
			'./images/gather/profile-edit.jpg',
			'./images/gather/assignments.jpg',
			'./images/gather/library.jpg',

			// Walgreens

			'./images/wag/heros/gui.jpg',
			'./images/wag/heros/site.jpg',

      // CardiAct

      './images/cardiact/poster/poster.jpg',
      './images/cardiact/process/pone.jpg',
			'./images/cardiact/process/ptwo.jpg',
			'./images/cardiact/process/pthree.jpg',
			'./images/cardiact/process/pfour.jpg',
			'./images/cardiact/process/pfive.jpg',
			'./images/cardiact/process/psix.jpg',
			'./images/cardiact/process/pseven.jpg',
			'./images/cardiact/process/peight.jpg',
			'./images/cardiact/process/pnine.jpg',
			'./images/cardiact/process/pten.jpg',

			// Castle

			'./images/castle/crest.png',
			'./images/castle/castle__hero.jpg',
			'./images/castle/castle__entrance.jpg',
			'./images/castle/stmarks__tower.jpg',
			'./images/castle/tudor.jpg',

			// Wotr

			'./images/wotr/tree.svg',
			'./images/wotr/richardiii.jpg',

			// TAA

			'./images/taa/designs/plans.jpg',
			'./images/taa/designs/collection.jpg',
			'./images/taa/designs/blog.jpg',
			'./images/taa/designs/about.jpg',

			// Misc

			'./images/misc/zorch/get.jpg',
			'./images/misc/mc/hero.jpg'
    ];

    cacheImages(imgs);
  });

  return (

    <div className="app">
    	{ isLoading
    		? <Preloader />
		    : <div className="app__wrap">
		        <Nav />
		      </div>
    	}	
    </div>

  );
}

export default App;
