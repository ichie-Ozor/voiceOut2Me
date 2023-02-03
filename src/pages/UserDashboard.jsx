import React from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {

  const selectedUser = useSelector((state) => state.Users.value.selectedUser);

  return (
    <>
    <div className="flex flex-col justify-center items-center mt-[2rem]">

      <section>
        <h1 className="text-3xl text-purple-900">User Disbord</h1>
      </section>
      <section>
        <h1 className="text-4xl text-amber-900 p-2"> Welcom {selectedUser.fullName} to VoiceOut2Me.</h1>
      </section>
    </div>
    </>
  );
};

export default UserDashboard;
