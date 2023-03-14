import React from 'react'



function DetailView(props) {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
  return (<>
    <div>DetailView</div>
      <h1>{windowUrl}</h1>
  </>
  )
}

export default DetailView