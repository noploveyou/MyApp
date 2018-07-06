import Home from './Home';
import ListTree from './ListTree';
import Map from './Map';
import SideMenu from './SideMenu';
import {createDrawerNavigator} from 'react-navigation';

export default createDrawerNavigator({
    Home: {
        screen: Home,
    },
    ListTree: {
        screen: ListTree
    },
    Map: {
        screen: Map
    }
},{
    contentComponent: SideMenu,
    drawerWidth: 300,
});