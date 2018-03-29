import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import store from './store.js';
import {addApple, addOrange, clearFruit} from './actions.js'

import FruitStandContainer from './components/fruit_stand_container';

// Just for testing

window.addApple = addApple;
window.addOrange = addOrange;
window.clearFruit = clearFruit;

window.store = store;


const App = () => (
	<Provider store={store}>
		<FruitStandContainer />
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<App />, document.getElementById("root")
	);
});
