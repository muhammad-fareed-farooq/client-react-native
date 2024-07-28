import { View, Text } from 'react-native'
import React from 'react'
import Index from './Config/Index'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>

      <Index/>
    </Provider>
    
  )
}

export default App