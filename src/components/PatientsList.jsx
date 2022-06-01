import Patient from "./Patient"


const PatientsList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
      <h2 className="mb-5 text-2xl text-center font-black">Patient's List</h2>
      <Patient/>
      <Patient/>
      <Patient/>
    </div>
    
  )
}

export default PatientsList