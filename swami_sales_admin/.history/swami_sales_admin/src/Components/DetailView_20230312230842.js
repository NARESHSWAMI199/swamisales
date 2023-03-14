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
  <div className='row'> 
          <div className='boder border-1 b-1' style={{ border:' border: 1px solid red'}}>
      <Space direction="vertical" style={{ justifyContent: 'center' }}>
          <h3>DetailView</h3>
        <Image 
            width={200}
            src={host+data.image}
        />
      </Space>
      </div>
      </div>
  </>
  )
}

export default DetailView