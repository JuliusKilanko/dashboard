import React from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/charts/Chart'
import List from '../../components/table/Table'

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homecontainer'>
          <Navbar />
          <div className='widgets'>
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earnings'/>
            <Widget type='balance'/>
          </div>
          <div className='charts'>
            <Featured />
            <Chart title={'Last 6 Month Sales'} aspect={2 / 1}/>
          </div>
          <div className='Tablelist'>
            <div className='listTitle'>Lastest Transaction</div>
            <List />
          </div>
        </div>
    </div>
  )
}

export default Home