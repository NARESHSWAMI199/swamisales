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

    {/* <h1>{JSON.stringify(profiles)}</h1> */}

          <ul className='list-group'> {profiles.map((value,i) =>{
              return <li className='ist-group-item'>{ value.username}</li>
    })}

    </ul>
    
    </>
  )
}

export default Users