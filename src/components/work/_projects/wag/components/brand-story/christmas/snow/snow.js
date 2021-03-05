import React from 'react'
import Grid from '../../../containers/grid/grid'
import Content from '../../../containers/content/content'
import SnowFlake from './snow-flake'
import './style.scss'

class Snow extends React.Component {
	render() {
		return (

			<div className="snow__contain">
				<Grid columns="6">
				  <Content><SnowFlake /></Content>
				  <Content><SnowFlake /></Content>
				  <Content><SnowFlake /></Content>
				  <Content><SnowFlake /></Content>
				  <Content><SnowFlake /></Content>
				  <Content><SnowFlake /></Content>
				</Grid>
			</div>
		)
	}
}

export default Snow