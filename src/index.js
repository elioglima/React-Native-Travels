import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Home from './pages/Home';
import Details from './pages/Details';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Details,
  }),
);

export default Routes;
