import "./Table.scss"
import Phone from '../../assets/product.webp'
import Phone1 from '../../assets/phone.jpg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {
    const rows=[
        {
            id :1,
            product : 'Samsung',
            img : Phone,
            customer : 'John Smith',
            date : '1 March',
            amount : 785,
            method : 'Cash on Delivery',
            status : 'Approved'
        },
        {
            id :2,
            product : 'Samsung s20',
            img : Phone1,
            customer : 'William Smith',
            date : '5 March',
            amount : 705,
            method : 'Cash on Delivery',
            status : 'Pending'
        },
        {
            id :3,
            product : 'Samsung s10',
            img : Phone,
            customer : 'Smith Max',
            date : '31 June',
            amount : 1025,
            method : 'Cash on Delivery',
            status : 'Approved'
        },
        {
            id :4,
            product : 'Samsung',
            img : Phone,
            customer : 'John Smith',
            date : '1 March',
            amount : 785,
            method : 'Cash on Delivery',
            status : 'Approved'
        },
        {
          id :5,
          product : 'Samsung s20',
          img : Phone1,
          customer : 'William Smith',
          date : '5 March',
          amount : 705,
          method : 'Cash on Delivery',
          status : 'Pending'
      },
      {
        id :6,
        product : 'Samsung s20',
        img : Phone1,
        customer : 'William Smith',
        date : '5 March',
        amount : 705,
        method : 'Cash on Delivery',
        status : 'Pending'
    },

    ]
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead className="top">
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}>
            <TableCell className="tableCell">
              {row.id}
            </TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                <img src={row.img} alt="" className="image"/>
                {row.product}
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List