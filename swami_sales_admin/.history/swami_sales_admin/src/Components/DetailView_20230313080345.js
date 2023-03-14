import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { host } from '../Global';
import { Image,Space } from 'antd';


function DetailView(props) {
    let { username } = useParams();

    let [data,setData] = useState({})
    useEffect(()=>{
        axios.get(host +`/profiles/${username}/`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {console.log(err)})
    },[])
  return (<>
  <div className='container-fluid mt-5'>
      <div className=' d-flex shadow-sm p-5' style={{width:'100%'}}>
        <Image 
            style={{borderRadius:'50%'}}
            width={200}
            height={200}
            src={host+data.image}
        />
        <div className='mx-5 my-3'>
            <h3> {data.username} </h3>
            <p> {data.bio}</p>
            <p className=''> Followers {data.followers} </p>
            <p className=''> Following {data.followers} </p>
        </div>
  </div>
  
      </div>
  </>
  )
}

export default DetailView