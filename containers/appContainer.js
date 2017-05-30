import Expo from 'expo';
import React from 'react';
// import Plaid from 'plaid';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { screen } from '../store/actions/action.js'
import Router from '../navigation/Router';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount() {
    let self = this;
    // console.log('this.props', this.props.recieveHandler)
    // var handler = Plaid.create({
    //   clientName: 'Plaid Walkthrough Demo',
    //   env: 'sandbox',
    //   key: 'dd28db8e4c5148616b707f0ea5bdf5', // Replace with your public_key to test with live credentials
    //   product: ['auth', 'transactions'],
    //   webhook: 'localhost:8000', // Optional – use webhooks to get transaction and error updates
    //   selectAccount: false, // Optional – trigger the Select Account
    //   onLoad: function() {
    //     // Optional, called when Link loads
    //   },
    //   onSuccess: function(public_token, metadata) {
    //     // Send the public_token to your app server.
    //     // The metadata object contains info about the institution the
    //     // user selected and the account ID, if `selectAccount` is enabled.
    //     console.log('success')
    //     $.post('/get_access_token', {
    //       public_token: public_token,
    //     }, function(err, data) {
    //       //console.log('errrrr', err, 'data', data)
    //       //token = data.data
    //       self.setState({ token: data.data})
    //     });
    //   },
    //   onExit: function(err, metadata) {
    //     // The user exited the Link flow.
    //             console.log('ererer', err)

    //     if (err != null) {
    //       // The user encountered a Plaid API error prior to exiting.
    //     }
    //     // metadata contains information about the institution
    //     // that the user selected and the most recent API request IDs.
    //     // Storing this information can be helpful for support.
    //   }
    // });
  }

  render() {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('rootNavigation')}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recieveHandler: (handler) => {
      dispatch(recieveHandler(handler))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)