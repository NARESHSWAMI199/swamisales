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
                        <TableCell align="right">Followers&nbsp;(g)</TableCell>
                        <TableCell align="right">Following&nbsp;(g)</TableCell>
                        <TableCell align="right">Status&nbsp;(g)</TableCell>
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
                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}

export default Users