import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import { purple } from '@mui/material/colors';
import { baseurl } from '../api';
export default function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    category: "",
  })
  const [isloading, setIsLoading] = useState(false)
  const handlesubmit = async () => {
    //  console.log(formData)
    setIsLoading(true)
    try {
      const res = await axios.post(`${baseurl}/api/expense/insert`, formData)
      // console.log(res)
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => { 

          navigate("/")
        }, 2000)
      }
      else {
        toast.error(res.data.message)
      }


    } catch (error) {
      console.log(error)
    }

    finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }


  }

  return (
    <Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography variant='h4'> Add  Expense list</Typography>
      </Box>
      <Box sx={{ backgrounColor: "lavender", p: 4 }}>
        <Paper sx={{ width: "70%", p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}> </Paper>
        <TextField value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} fullWidth label="Enter expense title" placeholder="enter title here" sx={{ mb: 2 }} />
        <TextField value={formData.amount} type='number' fullWidth label="Enter expense  amount" onChange={(e) => setFormData({ ...formData, amount: e.target.value })} placeholder="enter amount here" sx={{ mb: 2 }} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            value={formData.category}
            sx={{ mb: 2 }}
            label="select expense category"
          // onChange={handleChange}
          >
            <MenuItem value={"transport"}>Transport</MenuItem>
            <MenuItem value={"food"}>food</MenuItem>
            <MenuItem value={"other"}>other</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handlesubmit} sx={{ mb: 1, bgcolor:"purple"}} variant='contained' fullWidth loading={isloading}>submit</Button>
        <Button component={Link} to={"/"} sx={{ mb: 1, bgcolor:"purple" }} variant='contained' fullWidth>view Entries</Button>
      </Box>
    </Box>
  )
}
