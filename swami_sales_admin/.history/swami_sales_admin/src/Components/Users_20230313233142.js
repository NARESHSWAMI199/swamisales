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
    { field: 'id', headerName: 'SNo.', width: 50 },
    { field: 'first_name', headerName: 'First name', width: 100 },
    { field: 'last_name', headerName: 'Last name', width: 100 },
   
    {
        field: 'username',
        headerName: 'Username',
        width: 120,

    },
    {
        field: 'followers',
        headerName: 'follwers',
        // type: 'number',
        width: 90,
    },
    {
        field: 'following',
        headerName: 'Following',
        // type: 'number',
        width: 90,
    },

    // { field: 'bio', headerName: 'Bio', width: 90 },
    { field: 'is_staff', headerName: 'Staff', width: 90 ,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.is_staff) return (<div key={params.row.id} className='text-center'><Link to='/' className='text-success' style={{ textDecoration: 'none' }}><CheckCircleIcon /></Link></div>)
            else return (<Link to='' className='text-danger' style={{ textDecoration: 'none', color: 'white' }}><CancelIcon/></Link>)
        }
},

    {
        field: 'status', headerName: 'Status', width: 90,
        renderCell: (params: GridValueGetterParams) => {
            if (params.row.status === 'A') return (<div key={params.row.id} className='text-center'><Link to="/" className='text-success' style={{ textDecoration: 'none' }} ><CheckCircleIcon /></Link></div>)
            else return (<Link to='' className='text-danger' style={{ textDecoration: 'none' }} ><CancelIcon /></Link>)
        }

        // ${params.row.status} ${params.row.lastName || ''}`,

    },

    { field: 'created', headerName: 'Created', width: 180 },

    {
       field :'' ,headerName: 'Detail View', width: 100,
        renderCell: (params: GridValueGetterParams) => {
             return (<Link href={`users/${params.row.username}`} className='link text-center' style={{ textDecoration: 'none', color: 'black' }} ><EditIcon fontSize='small'/></Link>)
        }

    },
  
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



import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function customCheckbox(theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: `1px solid ${
        theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
      }`,
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const PAGE_SIZE = 5;

export default function AntDesignGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  });

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        checkboxSelection
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
        {...data}
      />
    </div>
  );
}

