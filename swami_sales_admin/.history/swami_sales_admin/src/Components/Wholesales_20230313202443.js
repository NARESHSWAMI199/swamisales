import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { host } from '../Global'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'SNo.', width: 70 },
    // { field: 'first_name', headerName: 'First name', width: 130 },
    // { field: 'last_name', headerName: 'Last name', width: 130 },

    {
        field: 'name',
        headerName: 'Wholesale',
        width: 200,

    },
    {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        width: 100,
    },

    { field: 'description', headerName: 'Description', width: 200 },
    // {
    //     field: 'is_staff', headerName: 'Staff', width: 90,
    //     renderCell: (params: GridValueGetterParams) => {
    //         if (params.row.is_staff) return (<div className='text-center'><Link to='/' className='badge badge-success link'>Yes</Link></div>)
    //         else return (<Link to='' className='badge badge-warning link'>No</Link>)
    //     }
    // },

    {
        field: 'status', headerName: 'Status', width: 150,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<Link to="/" key={params.row.id} className='text-success' style={{textDecoration:'none', color :'white'
        }}><div className='text-center'><CheckCircleIcon/></div></Link>)
            else return (<Link to='' key={params.row.id} className='text-danger' style={{ textDecoration: 'none', color: 'white' }} ><CancelIcon /></Link>)
        }

    },

    { field: 'created', headerName: 'Created', width: 250 },

];


function Wholesale() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get(host +'/wholesale/')
            .then(res => {
                setRows(res.data.results)
            })

    }, [])
    return (<>
    <div>
        <h3 className='mt-5' style={{ fontFamily: 'serif' }}>All Wholesale</h3>

        <div className='d-flex justify-content-center text-center' style={{ height: 500, width: '100%' }}>
            <DataGrid
                sx={{ textAlign:'center' }}
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


export default Wholesale