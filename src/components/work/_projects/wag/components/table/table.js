import React from 'react'
import Heading from '../typography/heading/heading'
import List from '../list/list'
import Icon from '../icon/icon'
import Logo from '../logo/logo'
import './style.scss'

class Table extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tables: [
				{
					tableTitle: 'Save money',
					table: [
						{
							title: "Save money by automatically unlocking sale prices",
							tableResults: [
								{ result: true },
								{ result: true }
							]
						},
						{
							title: "Earn unlimited rewards storewide",
							tableResults: [
								{ result: true },
								{ result: true }
							]
						},
						{
							title: "Earn additional rewards on Walgreens branded products",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						},
						{
							title: "Save even more with only-for-you deals on the things you love",
							tableResults: [
								{ result: true },
								{ result: true }
							]
						}
					]
				},

				{
					tableTitle: 'Stay healthy',
					table: [
						{
							title: "Stay informed with real-time local enviornmental and health forecast",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						},
						{
							title: "Earn bonus rewards for reaching health goals",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						}
					]
				},

				{
					tableTitle: 'Save time',
					table: [
						{
							title: "Pick up essentials in as little as 30 minutes at the drive-thru, curbside or in store",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						},
						{
							title: "Add a payment method to your digital Wallet for faster, contactless checkout",
							tableResults: [
								{ result: true },
								{ result: true }
							]
						},
						{
							title: "Redeem your rewards instantly at checkout",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						},
						{
							title: "Choose your digital reciepts for quick, contactless checkout and to track your purchases",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						}
					]
				},

				{
					tableTitle: 'Help communities you care about',
					table: [
						{
							title: "Donate you rewards to give back",
							tableResults: [
								{ result: false },
								{ result: true }
							]
						}
					]
				}
			]
		}
	}

	render() {
		return (
		  
		  <div className="table">
		  	<div className="table__categories">
		  		<ul>
		  			<li><Heading size="medium" title="Balance Rewards" /></li>
		  			<li><Logo type="mywalgreens" /></li>
		  		</ul>
		  	</div>

		  	{ this.state.tables.map(( table, index ) =>
			  	<div className="table__item">
			  		<Heading size="medium" title={ table.tableTitle } />

			  		<div className="table__item--list">
			  			<List vertical>

			  				{ table.table.map(( tableItem, index ) =>
				  				<li>
				  					<span className="table__item--title">{ tableItem.title }</span>

				  					<ul className="table__item--results">
				  						{ tableItem.tableResults.map(( result, index ) =>
				  							<li>
				  								{ result.result == true
				  									? <Icon icon="check" />
				  									: null
				  								}
				  							</li>
				  						)}
				  					</ul>
				  					
				  				</li>
				  			)}

			  			</List>
			  		</div>
			  	</div>
			  )}
		  </div>

		)
	}
}

export default Table
