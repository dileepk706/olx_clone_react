import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseContext } from './store/firebaseContext';
import { firebaseAuth } from './utils/firebase-config';
import { Context } from './store/firebaseContext';
ReactDOM.render(
    <firebaseContext.Provider value={firebaseAuth}>
        <Context>
            <App />
        </Context>
    </firebaseContext.Provider>
    , document.getElementById('root'));
