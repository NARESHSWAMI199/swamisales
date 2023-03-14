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
  return (
      <div className='container-fluid bg-primary'>
          <div>
          <h3>DetailView</h3>
        <Image 
            width={200}
            src={host+data.image}
        />
      </div>
  </div>
  )
}

export default DetailView