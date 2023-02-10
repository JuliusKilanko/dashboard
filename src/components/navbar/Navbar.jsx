import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Logo from '../../assets/client.jpeg'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

function Navbar() {
  const {dispatch}= useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='searchbar'>
          <SearchIcon />
          <input type="text" placeholder='Search...' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon  className='icon' onClick={()=> dispatch({type : 'TOGGLE'})}/>
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon  className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon  className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon  className='icon'/>
            <div className='counter'>9+</div>
          </div>
          <div className='item'>
            <FilterListOutlinedIcon  className='icon'/>
          </div>
          <div className='item'>
            <img src={Logo} alt="profile" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar