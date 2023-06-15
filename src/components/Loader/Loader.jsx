import React from 'react'
import { Grid } from 'react-loader-spinner'

 const Loader = () => {
	return (
		<div>
			<Grid
				height='100'
				width='100'
				color='#9114ff'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				outerCircleColor=''
				innerCircleColor=''
				barColor=''
				ariaLabel='circles-with-bar-loading'
			/>
		</div>
	)
}
export default Loader;