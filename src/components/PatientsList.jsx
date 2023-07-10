import Patient from "./Patient"


const PatientsList = ({patients}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
      { patients && patients.length ? 
        <>
          <h2 className="mb-5 text-2xl text-center font-black">Patient's List</h2> 
          <p className="text-xl mt-5 mb-10 text-center">
            Management yours {''}
            <span className="text-indigo-600 font-bold">Patients and Appointments</span>
          </p>
          { 
            patients.map( patient => {
            
            return(
            <Patient
              key = { patient.id }
              patient = { patient }
            />
            )
          }) 
          }
        </>
      :
        <>
        <h2 className="mb-5 text-2xl text-center font-black">No patients yet.</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Start adding {''}
            <span className="text-indigo-600 font-bold">Patients and Appointments</span>
        </p> 
        </>
      }
      
    </div>
    
  )
}

export default PatientsList