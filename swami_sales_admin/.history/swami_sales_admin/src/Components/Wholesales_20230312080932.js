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


function Wholesales() {

    const [wholesales, setWholesale] = useState([])

    // function createData(
    //      name: string,
    //      calories: number,
    //      fat: number,
    //      carbs: number,
    //      protein: number,
    //  ) {
    //      return { name, calories, fat, carbs, protein };
    //  }


    // const rows = [
    //      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //      createData('Eclair', 262, 16.0, 24, 6.0),
    //      createData('Cupcake', 305, 3.7, 67, 4.3),
    //      createData('Gingerbread', 356, 16.0, 49, 3.9),
    //  ];
    useEffect(() => {

        axios.get(host +'/wholesale/')
            .then(res => {
                setProfiles(res.data.results)
                console.log(res.data)
            })

    }, [])

    return (<>
        <h3 className='mt-5' style={{ fontFamily: 'serif' }}>All Users</h3>
        <TableContainer className='' component={Paper}>
            <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Followers</TableCell>
                        <TableCell align="right">Following</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Staff</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {profiles.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.image}
                            </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.followers}</TableCell>
                            <TableCell align="right">{row.following}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{JSON.stringify(row.is_staff)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}





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
    {
        field: 'is_staff', headerName: 'Staff', width: 90,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.is_staff) return (<div className='text-center'><Link to='/' className='badge badge-success link'>Yes</Link></div>)
            else return (<Link to='' className='badge badge-warning link'>No</Link>)
        }
    },

    {
        field: 'status', headerName: 'Status', width: 100,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<div className='text-center'><Link to="/" className='badge badge-success link'>Active</Link></div>)
            else return (<Link to='' className='badge badge-warning link'>Deactive</Link>)
        }

        // ${params.row.status} ${params.row.lastName || ''}`,

    },

];


function DataTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get(host + '/profiles/')
            .then(res => {
                setRows(res.data.results)
                console.log(res.data)
            })

    }, [])
    return (<>
        <h3 className='mt-5' style={{ fontFamily: 'serif' }}>All Users</h3>

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


export { DataTable, Wholesales }