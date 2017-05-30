import React from 'react'
import { View, Text } from 'react-native'

const OverviewModal = () => {
	const { heading, overviewModal, overviewText, overviewRow, cashText, lineBreak } = styles
	return (
		<View style={overviewModal}>
			<View style={heading}>
				<Text style={{...overviewText, ...{fontSize: 18} }}>Overview</Text>
			</View>
			<View style={overviewRow}>
				<Text style={overviewText}>Cash</Text>
				<Text style={{...cashText, ...overviewText}}>$15,437</Text>
			</View>
			<View style={overviewRow}>
				<Text style={overviewText}>Credit</Text>
				<Text style={overviewText}>-$437</Text>
			</View>
			<Text style={lineBreak}/>
			<View style={overviewRow}>
				<Text style={overviewText}>Total</Text>
				<Text style={{...overviewText,...cashText}}>$15,000</Text>
			</View>
		</View>
	)
}

const styles = {
	heading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	overviewModal: {
		shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: .5,
		width: 200,
		borderRadius: 5,
		flex:1,
		alignItems: 'center',
		flexDirection: 'column',
	},
	overviewText: {
		fontFamily: 'HelveticaNeue-Light',
		fontSize: 15,
	},
	cashText: {
		color: '#689F38',
	},
	overviewRow: {
		flex:1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		padding: '2% 0% 2% 0%'
	},
	lineBreak: {
		width: '90%',
		height: 1,
		backgroundColor: 'gray'
	}

}
export default OverviewModal