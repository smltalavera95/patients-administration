
const Error = ({children}) => {

    return (
        <div>
            <div className='bg-red-600 py-3 px-2 text-white text-center mb-5 rounded-sm'>
              {children}
            </div>
        </div>
    )
}

export default Error