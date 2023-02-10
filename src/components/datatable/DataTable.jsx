import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../DataTable';
import { Link } from 'react-router-dom';

function DataTable() {

    const actionColumn =[{field : 'action', headerName : 'action', width : 200, renderCell : ()=>{
        return(
            <div className='cellAction'>
                <Link to={'/users/2313'}><div className='viewButton'>View</div></Link>
                <div className='deleteButton'>Delete</div>
            </div>
        )
    }}]
  return (
    <div className='datatable'>
      <div className='addnewuser'>
        Add New User

        <Link to='/users/new'>
          <p className='btn'>Add New</p>
        </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pamountSize={5}
        rowsPerPamountOptions={5}
        checkboxSelection
      className='datagrid'/>
    </div>
  )
}

export default DataTable