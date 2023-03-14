import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { host } from '../Global';
import { Image } from 'antd';


function DetailView(props) {
    let { username } = useParams();

    // let [data,setData] = useState({})
    useEffect(()=>{
        axios.get(host +`/profiles/${username}/`)
        .then(res => {console.log(res.data)})
        .catch(err => {console.log(err)})
    },[])
  return (<>
    <div>DetailView</div>
      <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
  </>
  )
}

export default DetailView