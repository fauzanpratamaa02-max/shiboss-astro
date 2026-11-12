import React from 'react';
import { OrderProvider } from './context/OrderContext';
import { HomeView } from './views/HomeView';

export default function App() {
  return (
    <OrderProvider>
      <HomeView />
    </OrderProvider>
  );
}