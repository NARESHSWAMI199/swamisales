import React from 'react'
import useParams from 'react-router-dom'



function DetailView(props) {
    let { username } = useParams();
  return (<>
    <div>DetailView</div>
      <h1>{username}</h1>
  </>
  )
}

export default DetailView