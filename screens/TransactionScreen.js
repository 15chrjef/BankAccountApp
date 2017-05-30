import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Transaction from '../components/Transaction'

export default class LinksScreen extends React.Component {
  constructor(props) {
    super()
    this.transactions = []
    for(var i = 0; i < 30; i++) {
      this.transactions.push('T' + i)
    }
  }
  static route = {
    navigationBar: {
      title: 'Transactions',
    },
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container} >
          {this.transactions.map(text => <Transaction key={text} text={text}/>)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
});
