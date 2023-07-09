
const Error = ({msg}) => {

    return (
        <div>
            <div className='bg-red-600 py-3 px-2 text-white text-center mb-5 rounded-sm'>
              <p>{msg}</p>
            </div>
        </div>
    )
}

export default Error