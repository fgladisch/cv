import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { CV } from './CV';

import './index.css';

ReactDOM.render(
  <Provider store={store}><CV/></Provider>,
  document.getElementById('root')
);