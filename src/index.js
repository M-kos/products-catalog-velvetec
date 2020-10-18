import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as firebase from 'firebase'

import { reducers } from 'redux/reducers'
import App from 'components/App/App'

import './index.scss'
import 'materialize-css/dist/js/materialize.min.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDCl1nXnlab2BCOC4XXvygdnZJp9I7fZo0',
  authDomain: 'products-catalog-velvetech.firebaseapp.com',
  databaseURL: 'https://products-catalog-velvetech.firebaseio.com',
  projectId: 'products-catalog-velvetech',
  storageBucket: 'products-catalog-velvetech.appspot.com',
  messagingSenderId: '857277101261',
  appId: '1:857277101261:web:7d2129c9ff121644d36584',
}

firebase.initializeApp(firebaseConfig)

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
