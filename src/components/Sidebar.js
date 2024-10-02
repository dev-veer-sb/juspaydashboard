import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StackedBarChart from './StackedBarChart';
import SimpleLineChart from './SimpleLineChart';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Notifications from './Notifications';
import CardComp from '../common/CardComp';
import AllInfo from './AllInfo';
import { ArrowRight, MarginRounded } from '@mui/icons-material';
import TopSearchBar from './TopSearchBar';
import PaiChart from './PaiChart';
import TableComp from './TableComp';
import AsiaMap from './AsiaMap';
import Slider from './Slider';
import OrderList from './OrderList';
import { Switch } from '@mui/material';
const drawerWidth = 220;

export default function Sidebar() {

  const [dashValue, setdashValue] = React.useState('Default');
  const [theame, setTheame] = React.useState('Light')

  const color=theame==='Light'?'black':'white';
  const bgcolor=theame==='Light'?'white':'Black';




  const handleDefault=()=>{
    return (
      <>
      <Typography sx={{ marginBottom: 2, display:'flex' }}>
      <AllInfo theame={theame}/>
      <CardComp theame={theame}>
       <StackedBarChart color={color}/>
       </CardComp>
      
       </Typography>
       <Typography sx={{ marginBottom: 2 }}>
         <div style={{display:'flex'}}>
           <div style={{paddingRight:'15px'}}>
       <CardComp theame={theame}>   
      <SimpleLineChart/>
       </CardComp>
       </div>
       <CardComp theame={theame}>   
      <Slider/>
       </CardComp>
       </div>
       </Typography>
       <Typography sx={{ marginBottom: 2 }}>
         <div style={{display:'flex' }}>
           <div style={{paddingRight:'15px'}}>
         <CardComp theame={theame} sx={{ MarginRounded: 2 }}>   
      <TableComp/>
       </CardComp>
       </div>

       <CardComp theame={theame}>   
      <PaiChart/>
       </CardComp>
      
       </div>
       </Typography>
       </>
    )
  }

  const handleEcommerce=()=>{
    return(
<OrderList color={color} bgcolor={bgcolor}/>
    )
  }

  const handleDef=()=>{
    return (
      <div style={{width:'65vw'}}>

      </div>
    )
  }

  const handleDashBoard=(value)=>{
    switch(value){
      case 'Default': return handleDefault(); break;
      case 'eCommerce': return handleEcommerce(); break;
      default: return handleDef();
    }
  }

  const handleDash=(text)=>[
    setdashValue(text)
  ]

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
    <Box sx={{ display: 'flex' ,color: color, fontSize: 16,background:bgcolor,  overflowY: 'scroll',
          scrollbarWidth: 'none',  // For Firefox
          '&::-webkit-scrollbar': {
            display: 'none',  // For Chrome, Safari, and Opera
          } }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,background:bgcolor,color: color },
        
        }}
      >
        
      
             
           
        <Box sx={{ overflow: 'auto' }}>
         
          <List>
          <div style={{textAlign:'center',width:'100%', display:'flex'}}>
        <Avatar sx={{alignItems:'center'}}alt="Profile Picture" />
        <div style={{color:color,width:'60%',textAlign:'start',marginTop:'8px', padding:'5px'}}>
           User Name
          </div>
        </div>
        <Switch {...label} onClick={()=>setTheame(theame==='Light'?'#FFFFFF1A':'Light')}/>
        <div>{theame==='Light'?'DarkMode':'Light Mode'}</div>
          <div style={{padding:'3%',textAlign:'start',fontWeight:'bold'}}>
              DashBoard
              </div>
            {['Default', 'eCommerce', 'Projects', 'Online Courses'].map((text, index) => (
              <ListItem key={text} disablePadding>
                
                <ListItemButton onClick={()=>handleDash(text)}>
                <div>
                  <ArrowRight/>
                </div>
                  <ListItemIcon sx={{color: color,background:bgcolor}}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText fontSize='10'  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        
          <Divider />
          <List>
          <div style={{padding:'3%',textAlign:'start',fontWeight:'bold'}}>
            Pages
            </div>
            {['Use Profile', 'Account', 'Corporate','Blog','Social'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                <div>
                  <ArrowRight/>
                </div>
                  <ListItemIcon sx={{color: color,background:bgcolor}}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                 
                </ListItemButton>
              
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div>
      <TopSearchBar dashValue={dashValue} color={color} bgcolor={bgcolor}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div style={{padding:'1%',textAlign:'start',fontWeight:'bold'}}>
      {dashValue}
      </div>
      {handleDashBoard(dashValue)}
      </Box>
      </div>
      <div style={{width:'20%'}}>
    <Notifications color={color} bgcolor={bgcolor} />
    </div>

    </Box>
    </>

  );

  
}
