import './App.css';

import UserList from './UserList.js';
import UserDetails from "./UserDetails";
import React from "react";

const REACT_APP_ENV = 'dev';
const REACT_APP_DEP = 'Local';

function App() {
    let appEnv = REACT_APP_ENV;
    if (process.env.REACT_APP_ENV) {
        appEnv = process.env.REACT_APP_ENV;
    }
    let appDep = REACT_APP_DEP;
    if (process.env.REACT_APP_DEP) {
        appEnv = process.env.REACT_APP_DEP;
    }

    return (
        <div className="App">
            <h2>User List ({appEnv}, {appDep}):</h2>
            <UserList/>
            <br />
            <UserDetails/>
        </div>
    );

}

export default App;
