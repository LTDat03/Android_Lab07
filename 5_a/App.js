import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen01 from './components/API_Screen_01';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Screen01} 
         options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}