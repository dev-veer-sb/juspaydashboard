import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Divider } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F7F9FB',
  border:'1px solid',
  '&:hover': {
    backgroundColor: '#F7F9FB',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'gray',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopSearchBar(props) {
  return (
    <>
        <Toolbar sx={{background:props.bgcolor}}>
          <div style={{color:props.color,width:'60%',textAlign:'start'}}>
            Dashboard &nbsp;/ {props.dashValue}
          </div>
          <div style={{display:'flex',justifyContent:'space-around',width:'40%'}}>
          <div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="disabled" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
           
          </Search>
          </div>
          <div>
          <WbSunnyIcon color={props.color} />
          </div>
          <div>
          <HistoryIcon color={props.color} ></HistoryIcon>
          </div>
          <div>
          <NotificationsActiveIcon color={props.color} ></NotificationsActiveIcon>
          </div>
          </div>
        </Toolbar>
        <Divider sx={{ borderBottomWidth: 2, borderColor: '#F7F9FB' }} />

        </>
  );
}
