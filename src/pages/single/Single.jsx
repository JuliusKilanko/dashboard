import React from 'react'
import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Logo from '../../assets/client.jpeg'
import Chart from '../../components/charts/Chart'
import List from '../../components/table/Table'

function Single() {
  return (
      <div className='single'>
      <div className='nav'>
      <Sidebar />
      </div>
      <div className='singleContainer'>
        <Navbar />
        <div className='up'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src={Logo} alt="" className='itemImg'/>
              <div className='Details'>
                <h1 className='itemTitle'>Jone Doe</h1>
                <div className='detailItems'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>jonedoe@gmail.com</span>
                </div>
                <div className='detailItems'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 234 567 789</span>
                </div>
                <div className='detailItems'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Elton st. 234 Garden Yd.</span>
                </div>
                <div className='detailItems'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title ={'User Spending for (Last 6 Month)'}/>
          </div>
        </div>
        <div className='bottom'>
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
      </div>
  )
}

export default Single