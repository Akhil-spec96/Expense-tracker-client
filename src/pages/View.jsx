import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import ExpenseTable from '../components/Table'
import FloatingAddButton from '../components/FloatingAddButon'
import axios from 'axios'
import { baseurl } from '../api'

export default function View() {
  const[allExpenses,setAllExpenses]=useState([])
  const fetchallExpenses=async()=>{
    try {
      const res=await axios.get(`${baseurl}/api/expense/view-all`);
      // console.log(res.data);
      if (res.data.success) {
        setAllExpenses(res.data.expenses)
      } 
       } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    fetchallExpenses();
  },[])
  // console.log(allExpenses)
  return (
    <div>
        
        
            <Box sx={{textAlign:"center"}}>
                <Typography variant="h4">Expense list</Typography>
            </Box>
             <Box sx={{p:2}}/>
             <ExpenseTable allExpenses={allExpenses}fetchallExpenses={fetchallExpenses}/>
             <FloatingAddButton/>
        
      
    </div>
  )
}
