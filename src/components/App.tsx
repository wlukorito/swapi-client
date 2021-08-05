import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import People from './People';
import Details from './Details';
import { initialState } from '../context/state';
import { AppContext } from '../context/appContext';

const App: FC = () => {
    const [globalState, setGlobalState] = useState(initialState);

    return (
        <AppContext.Provider value={{ globalState, setGlobalState }}>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={People} />
                    <Route path="/details" component={Details} />
                </Switch>
            </div>
        </AppContext.Provider>
    );
};

export default App;
