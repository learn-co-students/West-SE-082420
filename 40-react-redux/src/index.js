import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './Reducers'



ReactDOM.render(
<Provider store={createStore(reducer)} >
<App />
</Provider>
, document.getElementById('root'));
