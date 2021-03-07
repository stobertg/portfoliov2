
import React from 'react'
import PresentationText from './text/text'
import PresentationTitle from './text/title/title'
import CardiAct from '../_projects/cardiact/app/shell/shell'
import Logo from '../../../images/cardiact/hero/logo.svg'
import symbolDefs from '../../../images/cardiact/icons/symbol-defs.svg'
import "./style.scss"

class PhonePresentation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			switchMode: false,
			transition: false,

			// For the Emergency screen
			// Make this true once the prototype is done

			emergencyTitle: 'Emergency Mode',
			emergencyMode: true,
			mapText: true,
			confirmText: false,
			statusText: false,
			chatText: false,

			// For the Static screens

			staticTitle: 'Static Mode',
			staticMode: false,
			staticStatusText: true,
			staticStatusConfirmText: false,
			staticContactsText: false,
			staticProfileText: false,
		}
	}

	toggle() {
		this.setState({ toggle: !this.state.toggle });
	}

	showMapText() {
		this.setState({ 
			mapText: true,
			confirmText: false,
			statusText: false,
			chatText: false 
		});
	}

	showConfirmText() {
		this.setState({ 
			mapText: true,
			confirmText: true,
			statusText: false,
			chatText: false 
		});
	}

	showStatusText() {
		this.setState({ 
			mapText: false,
			confirmText: false,
			statusText: true,
			chatText: false 
		});
	}

	showChatText() {
		this.setState({ 
			mapText: false,
			confirmText: false,
			statusText: false,
			chatText: true 
		});
	}

	showStaticStatusText() {
		this.setState({ 
			staticStatusText: true,
			staticStatusConfirmText: false,
			staticContactsText: false,
			staticProfileText: false
		});
	}

	showStaticContactsText() {
		this.setState({ 
			staticStatusText: false,
			staticStatusConfirmText: false,
			staticContactsText: true,
			staticProfileText: false 
		});
	}

	showStaticProfileText() {
		this.setState({ 
			staticStatusText: false,
			staticStatusConfirmText: false,
			staticContactsText: false,
			staticProfileText: true 
		});
	}

	render () {
		return(
			<div className="stage__phone">
				<div className="stage__phone--phone">
					<div className="bg__blob">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="header-shape-gradient" x2="0.35" y2="1">
									<stop offset="0%" stopColor="var(--color-start)" />
									<stop offset="50%" stopColor="var(--color-mid)" />
									<stop offset="100%" stopColor="var(--color-stop)" />
								</linearGradient>
							</defs>
							<path className="gradient-bg" d="M30.2,-46.6C38.9,-35.1,45.8,-26.1,54.1,-14.3C62.3,-2.6,72,12,72.4,27.4C72.7,42.8,63.7,59.1,50.1,65.1C36.5,71,18.3,66.7,2.2,63.6C-13.8,60.6,-27.7,58.8,-42.7,53.4C-57.8,47.9,-74.1,38.6,-79.2,25.2C-84.4,11.7,-78.4,-5.9,-72,-22.7C-65.6,-39.5,-58.7,-55.4,-46.7,-65.8C-34.6,-76.2,-17.3,-80.9,-3.3,-76.4C10.7,-71.8,21.4,-58,30.2,-46.6Z" transform="translate(100 100)" />
						</svg>
					</div>

					<CardiAct 
						transition={this.state.transition}
						emergencyMode={this.state.emergencyMode}
						showMapText={() => this.showMapText()}
						showStatusText={() => this.showStatusText()}
						showChatText={() => this.showChatText()}
						showConfirmText={() => this.showConfirmText()}
						removeConfirmText={() => this.setState({ confirmText: false })}
						staticMode={this.state.staticMode}
						showStaticStatusText={() => this.showStaticStatusText()}
						showStaticContactsText={() => this.showStaticContactsText()}
						showStaticProfileText={() => this.showStaticProfileText()}
					/>
				</div>

				<div className="stage__right">
					<PresentationText>
						<PresentationTitle
							switchMode={this.state.switchMode}
							firstMode={this.state.emergencyTitle}
							secondMode={this.state.staticTitle}
						>

								{this.state.emergencyMode 
									? <div className="animation__text">
										<div className="animation__text--multi">
											{this.state.mapText 
												? <div className={`animation__text--1 ${this.state.confirmText ? 'animation__text--hide':''}`}>
														<div><strong>Map Screen</strong></div>
														<div><strong>Unified Response</strong></div>
													</div> 
												: null
											}

											{this.state.confirmText ? <div><strong>Confirm Screen</strong></div> : null }
										</div>

										{this.state.statusText ? <div><strong>Status Screen</strong></div> : null }
										{this.state.chatText   ? <div><strong>Chat Screen</strong></div>   : null }
									</div> 

								: null
							}

							{this.state.staticMode 
								? <div className="animation__text">
										{ this.state.staticStatusText   ? <div><strong>Static Mode</strong></div>     : null }
										{ this.state.staticContactsText ? <div><strong>Contacts Screen</strong></div> : null }
										{ this.state.staticProfileText  ? <div><strong>Profile Screen</strong></div>  : null }
										{ this.state.staticHelpText     ? <div><strong>Call for Help</strong></div>   : null }
									</div> 
								: null
							}
						</PresentationTitle>

						{this.state.emergencyMode ?
							<div className="stage__text--descp">
								<div className="animation__text">

									{this.state.mapText ?
										<div className={`animation__text--1 ${this.state.confirmText ? 'animation__text--hide':''}`}>
											<div>
												<p>
													CardiAct displays emergency mode when a victim request help, or a dangerous heart rate is detected with a heart rate monitor. The CPR Responder(s) will be sent an alert and provide the victims location, along with other vital imformation needed to help save the vicitim's life
												</p>
											</div>

											<div>
												<p>
													Every responder and emergency contacts can see the locations of other responders. When a responder reaches the victim, they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED.
												</p>
											</div>
										</div> : null
									}

									{this.state.statusText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													Here, users can view current heart rate and the duration of distress. This is important information because a victim can start to experience brain damage in 4-6 minutes
												</p>
											</div>
										</div> : null
								  }

									{this.state.chatText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													Responders and emergency contacts have the ability to communicate in a chat room setting, providing transparancy between all parties.
												</p>
											</div>
										</div> : null
									}

									{this.state.confirmText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													Once a responder reaches the victim, they can confirm if they have an AED or not, allowing the other responders or emergency contacts to retrieve one, if needed.
												</p>
											</div>
										</div> : null
									}
								</div>
						  </div> : null
						}

						{this.state.staticMode ?
							<div className="stage__text--descp">
								<div className="animation__text">

									{this.state.staticStatusText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													Static mode is for at-risk individuals who could possibly experience a cardiac arrest. The app is married to a heart rate monitor, that the individual wears and the app alerts CPR responders and emergency contacts. Here the user can see their current heart rate.
												</p>
											</div>
										</div> : null
									}

									{this.state.staticHelpText ?
								  	<div className="animation__text animation__text--descp">
								  		<div>
												<p>
													When an emergency happens, and the user is concious, they can call for help if there is an emergency, call a family member ot firend to help, or close the false alarm notification.
												</p>
											</div>
										</div> : null
									}

									{this.state.staticContactsText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													Here, a user can add or edit their exisiting contacts. Contacts are friends or family who are notified in addition to CPR responders when an at-risk individual expeeriences a cardiact arrest.
												</p>
											</div>
										</div> : null
									}

									{this.state.staticProfileText ?
										<div className="animation__text animation__text--descp">
											<div>
												<p>
													A user can update valuable information of responding parties by inputting their personal health information or any other valuable information.
												</p>
											</div>
										</div> : null
									}
								</div>
							</div> : null
						}
					</PresentationText>

					<div className="stage__phone--controls">
						<div className={`btn__toggle ${this.state.toggle ? "btn__toggle--switch" : ""}`}>
							<div 
								className={`${this.state.toggle ? "" : "btn__toggle--on"}`}
								onClick={() => {
									this.toggle(); 
									this.setState({ 
										transition: true,
									});

									setTimeout(function() {
										this.setState({
											switchMode: false,
											emergencyMode: true,
											staticMode: false,
										});
									}.bind(this), 1000);

									setTimeout(function() {
										this.setState({
											transition: false,
										});
									}.bind(this), 2300);
								}} 
								>

								<span className="icon icon__sm icon__heart">
									<svg><use xlinkHref={`${ symbolDefs }#icon__heart`}></use></svg>
								</span>
							</div>

							<div 
								className={`${this.state.toggle ? "btn__toggle--on" : ""}`}
								onClick={() => {
									this.toggle(); 
									this.setState({ 
										transition: true,
										mapText: true,
										confirmText: false,
										statusText: false,
										chatText: false,
										staticStatusText: true,
										staticStatusConfirmText: false,
										staticContactsText: false,
										staticProfileText: false,
									});

									setTimeout(function() {
										this.setState({
											switchMode: true,
											emergencyMode: false,
											staticMode: true,
										});
									}.bind(this), 1000);

									setTimeout(function() {
										this.setState({
											transition: false,
										});
									}.bind(this), 2300);
								}} 
								>

								<span className="icon icon__sm icon__avatar">
									<svg><use xlinkHref={`${ symbolDefs }#icon__avatar`}></use></svg>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="stage__phone--logo">
					<figure>
						<span className="icon icon__sm icon__victim">
							<svg><use xlinkHref={`${ symbolDefs }#icon__victim`}></use></svg>
						</span>

						<img src={ Logo } alt="CardiAct logo" />
					</figure>
				</div>
			</div>
		)
	}
}

export default PhonePresentation
