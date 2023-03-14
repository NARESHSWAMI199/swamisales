import React from 'react'



function DetailView(props) {
    const { location } = props;
    const query = new URLSearchParams(location.search);
  return (<>
    <div>DetailView</div>
      <h1>{query}</h1>
  </>
  )
}

export default DetailView