import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { MenuItem,Menu,SubMenu } from 'react-pro-sidebar'



function Dashborad() {
    const host = 'http://127.0.0.1:8000'
    const [wholesale , setWholesale] = useState({})
    const [staff, setStaff] = useState({})
    const [users, setUsers] = useState({})
    const [reatiler, setRetailer] = useState({})
    const [data, setData] = useState({})

    const [recentWholeSales, setRecentWholeSales] = useState([])
    const [recentStaffs, setRecentStaffs] = useState([])
    const [recentUsers, setRecentUsers] = useState([])
    const [recentReatiler, setRecentRetailer] = useState([])
    
    useEffect(()=>{
        axios.get(host)
            .then(res => {
                setWholesale(res.data.wholesale)
                setRecentWholeSales(res.data.wholesale.recent_wholesales)
                setStaff(res.data.staff)
                setRetailer(res.data.retailer)

                setRecentStaffs(res.data.staff.recent_staff)
                setUsers(res.data.users)
                setRecentUsers(res.data.users.recent_users)
                setRecentRetailer(res.data.retailer.recent_retailers)
            }[])

    },[]);
  return (
     
        <div className='row'>
          <div className='col-md-4 mt-1'>
              <div className='shadow-sm gredint-box  px-5 py-2'>
                  <div className='rounded'>
                      <div className=''>
                          <h1 className='mt-5 text-center'>Wholesales <br /> <span className="big-text">{JSON.stringify(wholesale.total_wholesale)}</span></h1>
                          <hr className='vr border'></hr>

                      </div>


                      {/* <label> <small>Recent users :</small></label> */}
                      <Menu>
                          <SubMenu className='mb-3' label='Recent wholesales :'>
                              {recentWholeSales.map((i, key) => {
                                  return (<>
                                      <MenuItem key={key}> <img height={20} width={30} src={host + i.image} /> {i.name} <span className='float-right'>{i.rating}</span></MenuItem>
                                  </>)
                              })}
                          </SubMenu>
                      </Menu>

                  </div>
              </div>
          </div>



          {/* Users */}
          <div className='col-md-4 mt-1'>
              <div className='shadow-sm  gredint-box px-5 py-2'>
                  <div className='rounded'>
                      <div className=''>
                          <h1 className='mt-5 text-center'>Users <br/> <span className="big-text">{JSON.stringify(users.total_user)}</span></h1>
                          <hr className='vr border'></hr>

                      </div>
                      

                      {/* <label> <small>Recent users :</small></label> */}
                          <Menu>
                          <SubMenu className='mb-3'  label='Recent wholesales :'>
                              {recentUsers.map((i, key) => {
                                  return (<>
                                      <MenuItem key={key}> <img height={20} width={30} src={host + i.image} /> {i.username} <span className='float-right text-success font-weight-bold'> {i.followers}</span></MenuItem>
                                  </>)
                              })}
                              </SubMenu>
                          </Menu>
                      
                  </div>
              </div>
          </div>

    
 {/* Sfaffs */}

          <div className='col-md-4 mt-1'>
              <div className='shadow-sm px-5 gredint-box py-2'>
                  <div className='rounded'>
                      <div className=''>
                          <h1 className='mt-5 text-center'>Staffs <br /> <span className="big-text">{JSON.stringify(staff.total_staff)}</span></h1>
                          <hr className='vr border'></hr>

                      </div>


                      {/* <label> <small>Recent users :</small></label> */}
                      <Menu>
                          <SubMenu className='mb-3'  label='Recent wholesales :'>
                              {recentStaffs.map((i, key) => {
                                  return (<>
                                      <MenuItem key={key}> <img height={20} width={30} src={host + i.image} /> {i.username}</MenuItem>
                                  </>)
                              })}
                          </SubMenu>
                      </Menu>

                  </div>
              </div>
          </div>

          {/* Retailer */}

          <div className='col-md-4 mt-3'>
              <div className='shadow-sm gredint-box px-5 py-2'>
                  <div className='rounded'>
                      <div className=''>
                          <h1 className='mt-5 text-center'>Retailers <br /> <span className="big-text">{JSON.stringify(reatiler.total_retailer)}</span></h1>
                          <hr className='vr border'></hr>

                      </div>


                      {/* <label> <small>Recent users :</small></label> */}
                      <Menu>
                          <SubMenu className='mb-3'  label='Recent retailers :'>
                              {recentReatiler.map((i, key) => {
                                  return (<>
                                      <MenuItem key={key}> <img height={20} width={30} src={host + i.image} /> {i.username}</MenuItem>
                                  </>)
                              })}
                          </SubMenu>
                      </Menu>

                  </div>
              </div>
          </div>


        </div>

)
}

export default Dashborad