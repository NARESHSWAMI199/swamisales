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

          <ul className='list-group'> {profiles.map((item,i) =>{
            return <li className='list-group-item' style={{display:'flex'}}>
                <img height={70} width={90} src={host + item.image} alt />
                <h4>{item.username}</h4>
                <a className='btn btn-primary'>Followers : {item.followers}</button>
                </li>
    })}

    </ul>
    
    </>
  )
}

export default Users