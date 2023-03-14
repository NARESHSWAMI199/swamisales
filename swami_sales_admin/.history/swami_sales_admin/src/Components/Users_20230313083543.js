import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { host } from '../Global'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'SNo.', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
   
    {
        field: 'username',
        headerName: 'Username',
        width: 120,

    },
    {
        field: 'followers',
        headerName: 'follwers',
        type: 'number',
        width: 90,
    },
    {
        field: 'following',
        headerName: 'Following',
        type: 'number',
        width: 90,
    },

    { field: 'bio', headerName: 'Bio', width: 90 },
    { field: 'is_staff', headerName: 'Staff', width: 90 ,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.is_staff) return (<div key={params.row.id} className='text-center'><Link to='/' className='text-success' style={{ textDecoration: 'none' }}><CheckCircleIcon /></Link></div>)
            else return (<Link to='' className='text-danger' style={{ textDecoration: 'none', color: 'white' }}><CancelIcon/></Link>)
        }
},

    {
        field: 'status', headerName: 'Status', width: 100,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<div key={params.row.id} className='text-center'><Link to="/" className='text-success' style={{ textDecoration: 'none' }} ><CheckCircleIcon /></Link></div>)
            else return (<Link to='' className='text-danger' style={{ textDecoration: 'none' }} ><CancelIcon /></Link>)
        }

        // ${params.row.status} ${params.row.lastName || ''}`,

    },

    {
       field :'' ,headerName: 'Detail View', width: 100,
        renderCell: (params: GridValueGetterParams) => {
             return (<Link href={`users/${params.row.username}`} className='link text-center' style={{ textDecoration: 'none', color: 'black' }} ><EditIcon fontSize='small'/></Link>)
        }

    },
    { field: 'created', headerName: 'Created', width: 250 },
  
];


function DataTable(props) {
    const [rows, setRows] = useState([]);
    const navigate  = useNavigate()
    useEffect(() => {
        props.token === null ?  navigate('/login') : 
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}`
            };
            axios.get(host + '/profiles/')
                .then(res => {
                    setRows(res.data.results)
                }).catch(err =>{console.log(err)})

    }, [])


    return (<>
    <div>
      <h3 className='mt-5'style={{fontFamily:'serif'}}>All Users</h3>

        <div style={{ height: 500, width: '100%' }}>
            <DataGrid className='text-center'
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        </div>
    </>
    );
}


const mapStateToProps = state => {
    console.log(JSON.stringify(state))
    return {
        token: state.token
    }
}






export default  connect(mapStateToProps,null)(DataTable)