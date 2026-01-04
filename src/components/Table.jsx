import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from"moment";
import { Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function ExpenseTable({allExpenses,fetchallExpenses}) {
  const handledelete=async(expensId)=>{
    try {
      const res=await axios.delete(`http://localhost:5000/api/expense/delete/${expensId}`)
      console.log(res.data)
      if (res.data.success) {
        fetchallExpenses();
        toast.success(res.data.message)
        
      } else {
        toast.error(res.data.message)
        
      }
    } catch (error) {
      
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL </TableCell>
            <TableCell >title</TableCell>
            <TableCell >category</TableCell>
            <TableCell >amount</TableCell>
            <TableCell >spent on</TableCell>
             <TableCell >actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allExpenses?.length==0?(
          <TableRow>
            <TableCell colSpan={6}align="center">Nodatafound</TableCell>
          </TableRow>
        )
        :allExpenses.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{moment(row.createdAt).format("DD MMM YYYY")}</TableCell>
              
              <TableCell><Button component={Link}to={`/edit/${row._id}`}variant="contained"color='success'>Edit</Button>
              <Button onClick={()=>handledelete(row?._id)} variant="contained"color='error'>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
