import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { host } from '../Global'
function Users() {

    const [profiles,setProfiles]= useState([])

    useEffect(()=>{

        axios.get(host + '/profiles/')
        .then(res => {
            setProfiles(res.data.results)
            console.log(res.data)
        })

    },[profiles])


  return (
      < div className='mt-5'>
          <table class="table" style={{ flex: 4 }}>
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
          </table>
    
    </div>
  )
}

export default Users