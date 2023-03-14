import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { host } from '../Global'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from '@mui/material';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'SNo.', width: 70 },
    // { field: 'first_name', headerName: 'First name', width: 130 },
    // { field: 'last_name', headerName: 'Last name', width: 130 },

    {
        field: 'name',
        headerName: 'Wholesale',
        width: 290,

    },
    {
        field: 'rating',
        headerName: 'rating',
        type: 'number',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
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
            if (params.row.status === 'A') return (<Link to="/" key={params.row.id} className='link badge badge-success ' style={{textDecoration:'none', color :'white'
        }}><div className='text-center'>Active</div></Link>)
            else return (<Link to='' key={params.row.id} className='badge badge-danger' style={{ textDecoration: 'none', color: 'white' >Deactive</Link>)
        }

    //     // ${params.row.status} ${params.row.lastName || ''}`,

    },

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
        <h3 className='mt-5' style={{ fontFamily: 'serif' }}>All Wholesale</h3>

        <div className='d-flex justify-content-center text-center' style={{ height: 500, width: '100%' }}>
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


export default Wholesale