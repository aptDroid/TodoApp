import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/reducers';
import TodoApp from './components/TodoApp';

let store = createStore(todoApp);

const renderApp = () => {
	ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
	);
	//console.log(store.getState());
};

store.subscribe(renderApp);
renderApp();