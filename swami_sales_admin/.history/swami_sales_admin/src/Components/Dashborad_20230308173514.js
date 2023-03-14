import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { MenuItem,Menu,SubMenu } from 'react-pro-sidebar'



function Dashborad() {
    const host = 'http://127.0.0.1:8000/'
    const [wholesale , setWholesale] = useState({})
    const [staff, setStaff] = useState({})
    const [users, setUsers] = useState({})

    const [recentWholeSales, setRecentWholeSales] = useState([])
    const [recentStaffs, setRecentStaffs] = useState([])
    const [recentUsers, setRecentUsers] = useState([])
    
    useEffect(()=>{
        axios.get(host)
            .then(res => {
                setWholesale(res.data.wholesale)
                setRecentWholeSales(res.data.wholesale.recent_wholesales)
                setStaff(res.data.staff)
                setRecentStaffs(res.data.staff.recent_staff)
                setUsers(res.data.users)
                setRecentUsers(res.data.users.recent_users)
            })

    },[]);
  return (
     
        <div className='row'>
          <div className='col-md-4'>
              <div className='shadow-sm  p-5'>
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


          {/* Users */}
          <div className='col-md-4'>
              <div className='shadow-sm p-5'>
                  <div className='gredint-box rounded py-1 px-4'>
                      <div className='mb-3'>
                          <h1 className='big-font mt-5'>Users : {JSON.stringify(users.total_users)}</h1>
                      </div>
                      <div className='row'>
                          <label> <small>Recent users :</small></label>
                          <Menu>
                              <SubMenu label='Recent users :'>
                              {recentUsers.map((i, key) => {
                                  return (<>
                                    <MenuItem key={i.id}>  {i.username}</MenuItem>
                                  </>)
                              })}
                              </SubMenu>
                          </Menu>
                      
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

)
}

export default Dashborad