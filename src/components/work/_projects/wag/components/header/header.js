import React from 'react'
import Logo from '../logo/logo'
import Form from '../form/form'
import Search from '../search/search'
import Button from '../buttons/general/button'
import Icon from '../icon/icon'
import './style.scss'

class Header extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }

	render(){
		return(

			<header className={`header ${this.state.show ? "header--active" : "header--hidden"}`}>
				<nav>
					<div className="header__side">
						<a href="/">
							<Logo type="logo--mark" />
						</a>

						<button className="btn__account">
							<strong>Menu</strong>
							<Icon icon="arrow-down" />
						</button>
					</div>

					<Search 
					  placeholder="Search"
					/>

					<div className="header__side">
						<button className="btn__account">
							<strong>Hi {this.props.user}</strong>
							<Icon icon="arrow-down" />
						</button>

						<Button
            	btnCircle
            	color="ghost"
            	icon="cart"
            	ariaLabel="Clear the input and type a new search"
            	onClick={this.props.clear}
            />
					</div>
				</nav>
			</header>

		 )
	}
}

export default Header