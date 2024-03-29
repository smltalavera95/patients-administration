import {useState, useEffect} from 'react';
import Error from './Error'

const Form = ({patients, setPatients}) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault()

    //Check if a field is empty
    if([name, owner, email, date, description].includes('')){
      setError(true)
      return
    } 
    setError(false)

    const patientOb = {
      id: generateId(),
      name,
      owner,
      email,
      date,
      description
    }

    //Set the state of patients
    setPatients([...patients, patientOb])

    //Clean all the values in form
    cleanValues()
  }

  const cleanValues = () => {
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setDescription('')
  }

  const generateId = () => {
    let date = Date.now().toString(36);
    let random = Math.random().toString(36).substr(2);

    return date + random;
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 mb-10 mx-10'>
      <h2 className='font-black text-2xl text-center mb-5'>Patient Record</h2>

        <form onSubmit={handleSubmit} 
        className='bg-white shadow-md rounded-lg p-8'>
          { error && <Error>
              <p>There are some empty fields</p>
            </Error>}
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            id="pet-name" 
            placeholder='Pet Name'
            />
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="text" 
            value={owner} 
            onChange={(e) => setOwner(e.target.value)}
            id="pet-owner" 
            placeholder='Pet Owner'/>
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            id="email-owner" 
            placeholder='Email Owner'/>
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            id="date-exit"/>
          </div>
          <div className='mb-5'>
            <textarea className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="textarea" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            id="pet-visit" placeholder='Description of the visit'/>
          </div>
          <input type="submit" name="submit" id="submit" value="Add Patient"
          className='bg-blue-900 w-full p-3 text-white uppercase font-bold text-center hover:cursor-pointer hover:bg-blue-700 transition-all' />
        </form>
    </div>
  )
}

export default Form