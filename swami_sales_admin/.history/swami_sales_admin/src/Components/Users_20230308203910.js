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
      < div className ='row'>

    {/* <h1>{JSON.stringify(profiles)}</h1> */}

          <ul className='list-group'> {profiles.map((item,i) =>{
            return <li className='list-group-item' style={{display:'flex'}}>
                <img height={70} width={90} src={host + item.image} alt />
                <p>{item.username}</p>
                <small>Followers : {item.followers}</small>
                </li>
    })}

    </ul>
    
    </div>
  )
}

export default Users