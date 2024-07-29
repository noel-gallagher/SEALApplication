import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from '../Entry';
import Login from '../Login';
import Personal from '../Personal';

const Stack = createNativeStackNavigator();

const index = ({navigation}) => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={Entry}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Personal" component={Personal}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;


