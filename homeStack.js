import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from "./components/Home";
import AddItem from "./components/Add-Item";
import Detail from "./components/Detail";

const screens = {
    Home: {
        screen: Home,
    },
    AddItem: {
        screen: AddItem,
    },
    Detail: {
        screen: Detail,
    },
}

const HomeStack = createStackNavigator(screens)




export default createAppContainer(HomeStack)