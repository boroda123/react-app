import './App.css';

import UserList from './UserList.js';
import UserDetails from "./UserDetails";
import React from "react";

function App() {

    return (
        <div className="App">
            <h2>User List</h2>
            <UserList/>
            <br />
            <UserDetails/>
        </div>
    );

}

export default App;
