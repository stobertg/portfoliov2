import React from 'react'
import ReactDOM from 'react-dom';
import Link from 'next/link'
import Icon from '../icon/icon'
import List from '../list/list'
import styles from "./style.scss"

class NavRail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick(){
    this.setState({ active: !this.state.active })
  }

	render () {
    return(

			<div 
        className="nav__rail nav__rail--pres"
        aria-expanded={this.state.active ? 'true':'false'}>

        {this.props.title 
          ? <div 
              className="nav__rail--title"
              tabIndex="-1"
              onClick={() => this.handleClick()}>
              
              <span>
                <strong>{this.props.title}</strong>
              </span>

              <Icon
                name="Click to show navigation"
                icon="arrow-down"
              />
            </div>

          : null
        }

        <nav>
          <List vertical>
            {
              this.props.links
              .filter( link => link.id === this.props.category )
              .map((link, index) => (

                <li key={link.id}>
                  <a href={link.href}>
                    <span>{link.img}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))
            }
          </List>
        </nav>
      </div>

		)
  }
}

export default NavRail
