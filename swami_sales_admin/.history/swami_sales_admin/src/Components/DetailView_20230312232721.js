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
    <h3>DetailView</h3>
      <div className=' d-flex justify-content-center' style={{width:'100%'}}>
        <Image 
            style={{height:'50%',width : '50%'}}
            width={200}
            src={host+data.image}
        />
  </div>
      </div>
  </>
  )
}

export default DetailView