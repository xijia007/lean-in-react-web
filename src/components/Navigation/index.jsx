import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as ROUTES from '../../constants/routes';

function Navigation() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      </ul>
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Grid container spacing={2}>
  //       <Grid item xs={8}>
  //         <Item>xs=8</Item>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Item>xs=4</Item>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Item>xs=4</Item>
  //       </Grid>
  //       <Grid item xs={8}>
  //         <Item>xs=8</Item>
  //       </Grid>
  //     </Grid>
  //   </Box>
  // );
}

export default Navigation;
