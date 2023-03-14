import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { host } from '../Global'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


 function Users() {

    const [profiles, setProfiles] = useState([])

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

        axios.get(host + '/profiles/')
            .then(res => {
                setProfiles(res.data.results)
                console.log(res.data)
            })

    }, [profiles])

    return (<>
        <h3 className='mt-5'style={{fontFamily:'serif'}}>All Users</h3>
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
    { field: 'sn', headerName: 'SNo.', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DataTable() {
    return (<>
      <h3 className='mt-5'style={{fontFamily:'serif'}}>All Users</h3>

        <div style={{ height: 1050, width: '100%' }}>
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


export  {DataTable,Users}