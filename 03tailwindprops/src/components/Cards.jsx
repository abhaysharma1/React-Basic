import React from 'react'

function Cards(props) {
  
  return (
    <div>
          <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl  bg-blue-950">
      
      <div>
        
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
        />
      </div>
      <div className="flex items-center md:items-start">

        <span className="text-2xl font-medium">{props.username}</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          
          <span>No. 4</span> <span>·</span> <span>2025</span>
        </span>
      </div>
    </div>;

    </div >
  )
}

export default Cards