import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { host } from '../Global';



function DetailView(props) {
    let { username } = useParams();

    useEffect(()=>{
        axios.get(host +`/profiles/${username}/`)
        .then(res => {console.log(res.data)})
        .catch(err => {console.log(err)})
    },[])
  return (<>
    <div>DetailView</div>
      <h1>{username}</h1>
  </>
  )
}

export default DetailView