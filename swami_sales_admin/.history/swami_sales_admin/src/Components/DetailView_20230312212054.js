import React from 'react'
import { URLSearchParams,useLocation } from 'react-router-dom'



function DetailView(props) {
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
  return (<>
    <div>DetailView</div>
      <h1>{searchParams}</h1>
  </>
  )
}

export default DetailView