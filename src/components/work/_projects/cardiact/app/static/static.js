import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Components needed

import CardiStaticHeader from './header/header'
import CardiStaticStatus from './status/status'
import CardiStaticContacts from './contacts/contacts'
import CardiStaticProfile from './profile/profile'

class CardiActStatic extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      helpOpen: false,
      showStatus: true,
      showContacts: false,
      showProfile: false,
    }
  }

  helpOpen() {
    this.setState({ helpOpen: !this.state.helpOpen });
  }

  onStatusClick() {
    this.setState({ 
      showStatus: true,
      showContacts: false,
      showProfile: false 
    });
  }

  onContactsClick() {
    this.setState({ 
      showStatus: false,
      showContacts: true,
      showProfile: false 
    });
  }

  onProfileClick() {
    this.setState({ 
      showStatus: false,
      showContacts: false,
      showProfile: true 
    });
  }

	render() {
		return (

		  <div className="cardiact cardiact__static">
		  	<CardiStaticHeader 
          // For the Status Screen

          statusSelected={this.state.showStatus}
          showStaticStatus={() => this.onStatusClick()}
          showStatusText={() => this.props.showStatusText()}

          // For the Contact Screen

          contactsSelected={this.state.showContacts}
          showStaticContacts={() => this.onContactsClick()}
          showContactsText={() => this.props.showContactsText()}

          // For the Profile Screen

          profileSelected={this.state.showProfile}
          showStaticProfile={() => this.onProfileClick()}
          showProfileText={() => this.props.showProfileText()}
        />

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>

          {this.state.showStatus ?
            <CardiStaticStatus 
              isHelpOpen={this.state.helpOpen}
              helpOpen={() => this.helpOpen()}
            /> : null
          }
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>

          {this.state.showContacts ?
            <CardiStaticContacts /> : null
          }
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>

          {this.state.showProfile ?
            <CardiStaticProfile /> : null
          }
        </CSSTransitionGroup>
		  </div>

		)
	}
}

export default CardiActStatic
