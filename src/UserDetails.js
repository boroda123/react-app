
function UserDetails() {
  console.log("UserDetails: ");
  //console.log(data);

  let user = null;
  console.log(user);

    function renderUserDetails(user) {
        if (!user || !user.userId) {
            return (
                <div id="userdetails">
                    <h3>User Details</h3>
                    <ul><li>No User selected</li></ul>
                </div>
            );
        } else {
            return (
                <div id="userdetails">
                    <h3>User Details</h3>
                    <ul>
                        <li>ID: {user.userId}</li>
                        <li>First Name:&nbsp; {user.firstName}</li>
                        <li>Last Name:&nbsp; {user.lastName}</li>
                        <li>Login:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.login}</li>
                    </ul>
                </div>
            );
        }
    }

    return renderUserDetails(user);
}

export default UserDetails;
