import React from "react";
import { useSelector } from "react-redux";

const CounselorDashbord = () => {
  const selectedCounselor = useSelector(
    (state) => state.Counselors.value.selectedCounselor
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[2rem]">
        <section>
          <h1 className="text-3xl text-purple-900">Counselors Dashboard</h1>
        </section>
        <section>
          <h1 className="text-4xl text-amber-900 p-2">
            {" "}
            Welcom {selectedCounselor.fullName} to VoiceOut2Me.
          </h1>
        </section>
      </div>
    </>
  );
};

export default CounselorDashbord;
