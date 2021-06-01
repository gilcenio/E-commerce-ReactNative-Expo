import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Pages/Home'
import { Header } from '../Components/Header'
import { Offer } from '../Components/Offer'
import { Cart } from '../Pages/Cart'
import { RenderItemModal } from '../Components/RenderItemModal'
import CartProvider from '../Context/Cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="RenderItemModal" component={RenderItemModal} />
      </Stack.Navigator>
    </CartProvider>
  );
}
