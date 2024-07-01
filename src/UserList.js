
import React from 'react';
import { useState, useEffect } from "react";
import { styled } from "styled-components";

function UserList() {

    //const baseUrl = 'http://localhost:8080/users';
    //const baseUrl = 'http://localhost:8082/users';
    const baseUrl = 'https://k7b3riigaa.us-east-2.awsapprunner.com/users';

    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [flipToUpdate, setFlipToUpdate] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${baseUrl}`).then((response) => response.json())
            .then((data) => {
                console.log("Fetch: " + (data.error === null));
                console.log(data);
                if (data.error === null) {
                    return data.data;
                } else {
                    throw new Error(`<h3>${JSON.stringify(data.error)}</h3>`);
                }
            } )
            .then((users) => {
                setUsers(users)})
            .then(() => setLoading(false))
            .catch(setError)
    }, [ flipToUpdate ]);

    console.log("After Fetch: ");
    console.log(users);
    if (loading) return (<h3>Loading...</h3>);
    if (error) return (<pre>{JSON.stringify(error)}</pre>);
    if (!users) return null;

    //console.log("UserList: " + Array.isArray(users) + ", Length: " + (users) ? users.length : "NULL");
    console.log("UserList: " );
    console.log(users);

    if (!users) {
        return "No Data Received";
    }

    if (!users || !Array.isArray(users) || users.length === 0) {
        return (
            <div>No Users exist</div>
        );
    }

    const deleteUser = (userId) => {
        fetch(`${baseUrl}/${userId}`,
            {
                method: 'delete'
            })
            .then((data) => {
                console.log("Delete Fetch: ");
                console.log(data);
            } )
            .then((data) => {
                setTimeout(setFlipToUpdate(!flipToUpdate), 2000);
                setSelectedUserId(null);
            })
            .catch(setError)

    }

    const handleDelete = (e, selectedUserId) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("DEL NEW ID: ", selectedUserId);
        console.log("DEL EVENT:  ", e);

        deleteUser(selectedUserId);

        const detailsEl = document.getElementById(selectedUserId);
        console.log(detailsEl);
    }

    const handleClick = (e, selectedUserId) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("NEW ID: ", selectedUserId);
        console.log("EVENT:  ", e);
        console.log(users);

        setSelectedUserId(selectedUserId);

        for (let i=0; i<users.length; i++) {
            let u = users[i];
            console.log("IDS: " + u.userId + " :: " + selectedUserId + " :: " + (u.userId === selectedUserId));
            if (u.userId === selectedUserId) {
                const html =
                "<h3>User Details</h3><ul><li>ID: " +u.userId +"</li>"+
                    "<li>First Name:&nbsp; "+u.firstName +"</li>"+
                    "<li>Last Name:&nbsp; "+u.lastName+"</li>"+
                    "<li>Login:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+u.login+ "</li></ul>";

                console.log(html);
                const detailsEl = document.getElementById("userdetails");
                console.log(detailsEl);

                if (detailsEl) {
                    detailsEl.innerHTML = html;
                }
                break;
            }
        }
    };

    const SelectableTr  = styled.tr`
        background-color: ${props => (props.selectedid === props.id
            ? 'silver'
            : 'white')};
    `;

    function renderUserTable(users) {
        if (!users || users.length === 0) return "";

        return (
            <table width="500px">
                <thead>
                <tr style={{backgroundColor: "white", cursor: "default"}}>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Login</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <SelectableTr selectedid={selectedUserId} id={user.userId} onClick={(e) => handleClick(e, user.userId)}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>
                            {user.login}
                            <button
                                className="show-on-hover"
                                onClick={(e) => handleDelete(e, user.userId)}
                            >DELETE</button>
                        </td>
                    </SelectableTr>
                ))}
                </tbody>
            </table>
        );
    }

    return renderUserTable(users);
}

export default UserList;
