import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// components
import App from './App';
import Hooks from './components/Hooks';
import Classes from './components/Classes';
import BaseLayout from './components/layout/BaseLayout';
import Todo from './components/Todo';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faTrash,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faTrash, faPencilAlt);

const saveToLocalStorage = (reduxGlobaState) => {
    //serialization = converting js object to a string

    try {
        const serializeState = JSON.stringify(reduxGlobaState);
        localStorage.setItem('state', serializeState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    const serializeState = localStorage.getItem('state');

    if (serializeState === null) {
        return undefined;
    } else {
        return JSON.parse(serializeState); //returns JS object
    }
};

const persistedState = loadFromLocalStorage();

// initializing redux store
// requires a reducer.  Second argument is for redux dev-tools extension.
let store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

//provider connects react to redux.  Must pass redux instance to provider via "store" prop.
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <BaseLayout>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route path='/hooks' component={Hooks} />
                        <Route path='/classes' component={Classes} />
                        <Route path='/todos' component={Todo} />
                    </Switch>
                </BaseLayout>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
