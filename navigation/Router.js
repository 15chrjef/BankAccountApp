import { createRouter } from '@expo/ex-navigation';

import AccountScreen from '../screens/AccountScreen';
import TransactionScreen from '../screens/TransactionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  accounts: () => AccountScreen,
  transactions: () => TransactionScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
