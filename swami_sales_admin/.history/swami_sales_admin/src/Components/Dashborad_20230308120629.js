import React,{useEffect, useState} from 'react'
import axios from 'axios'
import SidePannel from './SidePannel'



function Dashborad() {
    const [wholesale , setWholesale] = useState({})
    const [staff, setStaff] = useState({})
    const [recentWholeSales, setRecentWholeSales] = useState([])
    const [recentStaffs, setRecentStaffs] = useState([])
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000')
            .then(res => {
                setWholesale(res.data.wholesale)
                setRecentWholeSales(res.data.wholesale.recent_wholesales)
                setRecentStaffs(res.data.staff.recent_staff)
                setStaff(res.data.staff)
            })

    },[]);
  return (
      <div className='' style={{ "display": "flex" }}>
          <SidePannel />
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
              <div className='shadow-sm p-5'>
              <div className='gredint-box rounded py-1 px-4'>
                <div className='mb-3'> 
                          <h2 className='mt-5 big-font'>Wholesale : {JSON.stringify(wholesale.total_wholesale)}</h2>
                </div>
                    <div className='row'>
                            <label> <small>Recent wholesales :</small></label> 
                    <select className='custom-select'>
                            {recentWholeSales.map((i,key) => {
                            return (<option
                                key={key}>
                                {i.name}
                                </option>
                                )
                        })}
                    </select>
                </div>
             </div>
            </div>
        </div>
    
 {/* Sfaffs */}

          <div className='col-md-4'>
              <div className='shadow-sm p-5'>
                  <div className='gredint-box rounded py-1 px-4'>
                      <div className='mb-3'>
                          <h1 className='big-font mt-5'>Wholesalers : {JSON.stringify(staff.total_staff)}</h1>
                      </div>
                      <div className='row'>
                          <label> <small>Recent wholesales :</small></label>
                          <select className='border custom-select col-md-12'>
                              {recentStaffs.map((i, key) => {
                                  return (<option
                                      key={key}>
                                      {i.username}
                                  </option>
                                  )
                              })}
                          </select>
                      </div>
                  </div>
              </div>
          </div>


        </div>
     </div>
   </div>

)
}

export default Dashborad