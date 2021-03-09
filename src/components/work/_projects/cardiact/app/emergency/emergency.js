import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CardiEmergencyHeader from './header/header'
import CardiMap from './map/map'
import CardiDirections from './map/directions/directions'
import CardiStatus from './status/status'
import CardiChat from './chat/chat'

class CardiActEmergency extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      confirmOpen: false,
      confirmMainOpen: false,
      showMap: true,
      showDirections: true,
      showStatus: false,
      showChat: false,
    }
  }

  // Opening the directions when the user clicks on the address on the bottom of the map

  openDirs() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // Opening the Confirm screen within the the direction modal

  openConfirm() {
    this.setState({ confirmOpen: !this.state.confirmOpen });
  }

  // Opening the confirm screen from the Map screen - not the overlay

  openMainConfirm() {
    this.setState({ confirmMainOpen: !this.state.confirmMainOpen });
  }

  // When the Map button is clicked within the header

  onMapClick() {
  	this.setState({ 
  		showMap: true,
  		showDirections: true,
  		showChat: false,
  		showStatus: false 
  	});
  }

  // When the Status button is clicked within the header

  onStatusClick() {
  	this.setState({ 
  		showStatus: true,
  		showMap: false,
  		showDirections: false,
  		showChat: false,
  		confirmMainOpen: false 
  	});
  }

  // When the Chat button is clicked within the header

  onChatClick() {
  	this.setState({ 
  		showChat: true,
  		showMap: false,
  		showDirections: false,
  		showStatus: false,
  		confirmMainOpen: false 
  	});
  }

	render() {
		return (

		  <div className="cardiact">
		  	<CardiEmergencyHeader 
		  		showMap={ () => this.onMapClick() }
		  		mapSelected={ this.state.showMap }
		  		showMapText={ () => this.props.showMapText() }

		  		showStatus={ () => this.onStatusClick() }
		  		statusSelected={ this.state.showStatus }
		  		showStatusText={ () => this.props.showStatusText() }

		  		showChat={ () => this.onChatClick()}
		  		chatSelected={ this.state.showChat }
		  		showChatText={ () => this.props.showChatText() }
		  	/>

		  	<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={ 0 }
          transitionLeaveTimeout={ 0 }>

			  	{ this.state.showMap 
            ? <CardiMap 
  				  		confirmMainOpen={this.state.confirmMainOpen}
  				  		closeConfirm={() => {
  				  			this.setState({ confirmMainOpen: false }); 
  				  			this.props.removeConfirmText()
  				  		}}
  				  	/> 

            : null
        	}
        </CSSTransitionGroup>

      	{ this.state.showDirections 
          ? <CardiDirections 
  			  		isOpen={ this.state.isOpen }
  			  		confirmOpen={ this.state.confirmOpen }
  			  		openDirs={ () => {
  			  			this.openDirs(); 
  			  		}}
  			  		confirmMainOpen={ () => this.openMainConfirm() }
  			  		showConfirmText={ this.props.showConfirmText }
  			  		openConfirm={ () => this.openConfirm() }
  			  		backToMap={ () => {
  			  			this.openDirs(); 
  			  			this.setState({ confirmOpen: false }); 
  			  		}}
  			  	/> 

          : null
      	}

      	<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={ 0 }
          transitionLeaveTimeout={ 0 }>

        	{ this.state.showStatus 
            ? <CardiStatus /> 
            : null
        	}
        </CSSTransitionGroup>

      	<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={ 0 }
          transitionLeaveTimeout={ 0 }>

			  	{ this.state.showChat 
            ? <CardiChat /> 
            : null
        	}
      	</CSSTransitionGroup>

      	<div 
      		className={`overlay ${this.state.isOpen ? "show__overlay" :""}`} 
      		onClick={() => {
      			this.openDirs(); 
      		}}>
      	</div> 
		  	
		  </div>

		)
	}
}

export default CardiActEmergency
