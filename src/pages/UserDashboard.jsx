import React from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {

  const selectedUser = useSelector((state) => state.Users.value.selectedUser);

  return (
    <>
      <section>
        <h1>User Disbord</h1>
      </section>
      <section>
        <h1> Welcom {selectedUser.fullName} to Voice Out to me.</h1>
      </section>
    </>
  );
};

export default UserDashboard;
