import React from 'react'



function DetailView(props) {
    const windowUrl = window.href.location();
    const params = new URLSearchParams(windowUrl);
  return (<>
    <div>DetailView</div>
      <h1>{windowUrl}</h1>
  </>
  )
}

export default DetailView