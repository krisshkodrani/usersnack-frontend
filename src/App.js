import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import PizzasOverview from './views/PizzasOverview';
import PizzaDetailView from './views/PizzaDetailView';

class App extends React.Component {

  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<PizzasOverview />} />
            <Route path='/:pizzaId/' exact element={<PizzaDetailView />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    )
  }
}

export default App;
