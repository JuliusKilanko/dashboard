import React, { useState } from 'react'
import './New.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Image from '../../assets/img.jpg'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function New({inputs, title}) {

  const [file, setFile]= useState('')

  function handleUploadImg(event){
    setFile(event.target.files[0])
  }
  return (
    <div className='new'>
      <div className='newNav'>
        <Sidebar />
      </div>
      <div className='newContainer'>
        <Navbar />
        <div className='up'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file) : Image} alt=""/>
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadIcon  className='icon'/></label>
                <input type="file" id='file' style={{display:'none'}} onChange={handleUploadImg}/>
              </div>
              
              {inputs.map((input)=>(
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder
                  } />
                </div>
              ))}
              <button >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New