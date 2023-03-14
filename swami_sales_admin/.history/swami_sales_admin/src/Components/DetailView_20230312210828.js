import React from 'react'



function DetailView(props) {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
  return (<>
    <div>DetailView</div>
      <h1>{JSON.stringify(params)}</h1>
  </>
  )
}

export default DetailView