import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { host } from '../Global'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../reducer/actions/auth'



const columns: GridColDef[] = [
    { field: 'id', headerName: 'SNo.', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
   
    {
        field: 'username',
        headerName: 'Username',
        width: 190,

    },
    {
        field: 'followers',
        headerName: 'follwers',
        type: 'number',
        width: 100,
    },
    {
        field: 'following',
        headerName: 'Following',
        type: 'number',
        width: 100,
    },

    { field: 'bio', headerName: 'Bio', width: 90 },
    { field: 'is_staff', headerName: 'Staff', width: 90 ,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.is_staff) return (<div key={params.row.id} className='text-center'><Link to='/' className='badge badge-success link'>Yes</Link></div>)
            else return (<Link to='' className='badge badge-warning link'>No</Link>)
        }
},

    {
        field: 'status', headerName: 'Status', width: 100,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<div key={params.row.id} className='text-center'><Link to="/" className='badge badge-success link' style={{ textDecoration: 'none', color: 'white' }} >Active</Link></div>)
            else return (<Link to='' className='badge badge-warning link' style={{ textDecoration: 'none', color: 'white' }} >Deactive</Link>)
        }

        // ${params.row.status} ${params.row.lastName || ''}`,

    },

    {
        headerName: 'Detail View', width: 100,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<div key={params.row.id} className='text-center'><Link to="/" className='badge badge-success link' style={{ textDecoration: 'none', color: 'white' }} >Active</Link></div>)
            else return (<Link to='' className='badge badge-warning link' style={{ textDecoration: 'none', color: 'white' }} >Deactive</Link>)
        }

        // ${params.row.status} ${params.row.lastName || ''}`,

    }
  
];


function DataTable(props) {
    const [rows, setRows] = useState([]);
    const navigate  = useNavigate()
    useEffect(() => {
        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        // axios.defaults.xsrfCookieName = "csrftoken";
   
        // return () => {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}`
            };
            axios.get(host + '/profiles/')
                .then(res => {
                    setRows(res.data.results)
                }).catch(err =>{console.log(err)})

        // }
    }, [])


    return (<>
      <h3 className='mt-5'style={{fontFamily:'serif'}}>All Users</h3>

        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </>
    );
}


// const mapStateToProps = state => {
//     return {
//         token: state.token
//     }
// }


export default  connect(mapStateToProps,null)(DataTable)