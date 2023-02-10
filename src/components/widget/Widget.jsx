import './widget.scss'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widget({ type }) {

    let data;

    //Temporary Data
    const amount = 1000
    const diff =20

    switch (type) {
        case 'user':
            data ={
                title : 'USERS',
                isMoney : false,
                link :'See All Users',
                icon: <PersonOutlineOutlinedIcon className='icon' 
                style={{
                    backgroundColor :'rgba(255, 0, 0, 0.2)',
                    color:'crimson'
                }}/>
            }
            break;
            case 'order':
            data ={
                title : 'ORDERS',
                isMoney : false,
                link :'View all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' style={{
                    backgroundColor:'rgba(218, 165, 32, 0.2)',
                    color:'goldenrod'
                }} />
            }
            break;
            case 'earnings':
            data ={
                title : 'EARNINGS',
                isMoney : true,
                link :'View all Earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' style={{backgroundColor :'rgba(0,128,0,0.2)', color :'green'}} />
            }
            break;
            case 'balance':
            data ={
                title : 'BALANCE',
                isMoney : true,
                link :'See Account Balance',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{
                    backgroundColor:'rgba(128,0,128,0.2)',
                    color:'purple'
                }}/>
            }
            break;
    
        default:
            break;
    }




  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && '$'} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive '>
                <KeyboardDoubleArrowUpOutlinedIcon />
                {diff}%
            </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget