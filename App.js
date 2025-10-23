import { createStackNavigator } from '@react-navigation/stack';
import Reg from './screens/Reg'
import Login from './screens/Login'

// навигатор
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reg" component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
