import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid} = useParams()
  return (

    <div className='bg-white flex justify-center items-center text-7xl py-3'>
        <div>
            User: {userid}
        </div>
    </div>
  )
}

export default Users