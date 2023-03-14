import axios from 'axios'
import React, { useEffect } from 'react'
import { host } from '../Global'
function Users() {

    const [profiles,setProfiles]=([])

    useEffect(()=>{

        axios.get(host + 'profiles/')
        .then(res => {
            setProfiles(res.data)
        })

    },[profiles])


  return (
    <>


    
    </>
  )
}

export default Users