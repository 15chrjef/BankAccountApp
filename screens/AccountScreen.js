import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OverviewModal from '../components/OverviewModal'

import { MonoText } from '../components/StyledText';

export default class AccountScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Accounts'
    },
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>   
          <OverviewModal/>
        </View>
      </ScrollView>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  }
}
