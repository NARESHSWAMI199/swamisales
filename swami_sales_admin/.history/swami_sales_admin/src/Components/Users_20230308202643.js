import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { host } from '../Global'
function Users() {

    const [profiles,setProfiles]= useState([])

    useEffect(()=>{

        axios.get(host + '/profiles/')
        .then(res => {
            setProfiles(res.data.results)
            console.log(res.data)
        })

    },[profiles])


  return (
    <>

    <h1>{JSON.stringify(profiles)}</h1>

    {/* <div> {profiles.map((value,i) =>{
            return <p>{ }</p>
    })}

    </div> */}
    
    </>
  )
}

export default Users