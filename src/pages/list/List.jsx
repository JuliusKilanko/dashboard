import React from 'react'
import './List.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/datatable/DataTable'

function List() {
  return (
    <div className='lists'>
      <div className='side'>
      <Sidebar />
      </div>
      <div className='listContainers'>
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List