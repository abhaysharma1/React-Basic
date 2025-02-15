import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github() {

    // const [data,setdata] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=> response.json())
    //     .then((data)=> {
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4  text-3xl '>
        Github
        following = {data.followers }
        <img src={data.avatar_url} width = {300} alt="" />
        </div>
  )
}


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}