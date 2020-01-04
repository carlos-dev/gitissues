import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from './pages/welcome';
import Issues from './pages/issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Issues,
  }),
);

export default Routes;
