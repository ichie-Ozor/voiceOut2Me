import React from 'react'
import { useSelector } from 'react-redux';

const CounselorDashbord = () => {
    const selectedCounselor = useSelector((state) => state.Counselors.value.selectedCounselor);

  return (
    <>
    <section>
        <h1>Counselor Dashboard</h1>
    </section>
    <section>
    <h1>welcome {selectedCounselor.fullName} to VoiceOut2Me </h1>
    </section>
    </>
  )
}

export default CounselorDashbord