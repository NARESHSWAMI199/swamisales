import axios from 'axios'
import React, { useEffect } from 'react'
import { host } from '../Global'
function Users() {

    const [profiles,setProfiles]=([])

    useEffect(()=>{

        axios.get(host + '/profiles')
        .then(res => {
            setProfiles(res.data.results)
        })

    },[profiles])


  return (
    <>

    <p>{JSON.stringify(profiles)}</p>

    {/* <div> {profiles.map((value,i) =>{
            return <p>{ }</p>
    })}

    </div> */}
    
    </>
  )
}

export default Users