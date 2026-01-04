import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FloatingAddButton() {
    const navigate=useNavigate();
    
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Tooltip title="Add new Entry">
      <Fab   onClick={()=>navigate("/add")} sx={{position:"absolute",
        bottom:30,
        right:20,}}color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      
      </Tooltip>
    </Box>
  );
}
