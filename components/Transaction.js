import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Entypto from '@expo/vector-icons/Entypo';
console.log(Entypto)
const Transaction = ({text}) => {
	return(
		<View style={styles.TransactionStyle}>
      <Entypto name="shopping-bag" size={32} color="black" />
			<View style={styles.transactionTitleText}>
				<Text style={styles.transationText}>Transaction{text}</Text>
				<Text style={styles.transationText}>Saturday, May 27th</Text>
			</View>
			<Text style={styles.transationText}>$200.00</Text>
		</View>
	)
}

const styles = {
	TransactionStyle: {
		height: 50,
		width: '80%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: '1%',
		borderRadius: 5,
		shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: .5
	},
	transationText: {
		fontFamily: 'HelveticaNeue-Light',
	},
}

export default Transaction
