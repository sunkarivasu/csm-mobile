import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/CategoriesScreen';


const RootStack = createNativeStackNavigator();
const RootStackNavigator = () => (
    <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
);

export default Navigator = () => {
    return (
        <RootStackNavigator />
    );
};