import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => (
  <Provider store={createStore(rootReducer)}>
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
)

export default App
