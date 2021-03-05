import React from 'react'
import Heading from '../typography/heading/heading'
import List from '../list/list'
import Accordion from '../accordion/accordion'
import './style.scss'

class FAQ extends React.Component {
  render() {
    return(

      <div className="faq">
        <Heading size="large" title="Frequently asked questions" />
              
        <List>
          {this.props.faqs.map((faq, index) =>
            <Accordion key={faq.id} panels={[{ title: faq.title, content: faq.content }]} />
          )}
        </List>
      </div>

    )
  }
}

export default FAQ