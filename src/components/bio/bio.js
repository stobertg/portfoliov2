
import React from 'react'
import './style.scss'

import Social from './social/social'
import Resume from '../../images/global/stobert_resume.pdf'

const Bio = () => {
  return(

	  <div className="about__contain"> 
	    <div className="about__title">
	      <h1><strong>Tyler Stober</strong></h1>
	    </div>

	    <div className="about__descp">
	      <p>Chicago based multidisciplinary designer with a primary background in User Experience, User Interface design and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and execution of digital assets through multiple mediums.</p>
	      <p>Made in <a href="https://en.wikipedia.org/wiki/Bethel,_Ohio" target="_blank" rel="noreferrer">small town</a> Ohio, educated at <a href="https://en.wikipedia.org/wiki/University_of_Cincinnati_College_of_Design,_Architecture,_Art,_and_Planning" target="_blank" rel="noreferrer">DAAP</a> at U of Cincy, professionally developed in NYC and Chicago. Appreciator of <a href="https://www.pinterest.com/stobertg/user-interfaces/" target="_blank" rel="noreferrer">design</a>, <a href="https://www.pinterest.com/stobertg/history/" target="_blank" rel="noreferrer">history</a>, <a href="https://www.pinterest.com/stobertg/medieval-architecture/" target="_blank" rel="noreferrer">architecture</a>, <a href="https://www.pinterest.com/stobertg/cinema4d/" target="_blank" rel="noreferrer">3D</a>, and well done <a href="https://www.pinterest.com/stobertg/experiences/" target="_blank" rel="noreferrer">experiences</a>.</p>
	      <p><a href={ Resume } target="_blank" rel="noreferrer">Résumé</a></p>
	    </div>

	    <Social 
	      dribbble="https://dribbble.com/stobertg"
	      instagram="https://www.instagram.com/ttylerer/"
	      medium="https://medium.com/@TylerStober"
	      codepen="http://codepen.io/stobertg/"
	      linkedIn="https://www.linkedin.com/in/tyler-stober"
	    />
	  </div>

	)
}

export default Bio
