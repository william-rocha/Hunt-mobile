import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main'
import Product from './pages/product';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}  options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#DA552F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen name='Product' component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;