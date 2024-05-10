import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  console.log(user);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <h2>Your profile</h2>
      <p>UserName: {user.userName}</p>
    </div>
  );
}

export default Profile;
