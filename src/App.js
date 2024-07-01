import './App.css';

import UserList from './UserList.js';
import UserDetails from "./UserDetails";
import React from "react";

const REACT_APP_ENV = 'Default';

function App() {
    let appEnv = REACT_APP_ENV;
    if (process.env.REACT_APP_ENV) {
        appEnv = process.env.REACT_APP_ENV;
    }

    return (
        <div className="App">
            <h2>User List ({appEnv}):</h2>
            <UserList/>
            <br />
            <UserDetails/>
        </div>
    );

}

export default App;
