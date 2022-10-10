import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Services'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#1e88e5', paddingTop: '5%'}}>
      
      <img src='/Logo.png' alt='Sci-fi Painting Logo'/>
    
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'white'}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'  }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ width: '100vw',display: { xs: 'none', sm: 'block' } }}>
            <Grid container spacing={1} sx={{
              }}>
                <Grid item  sm={4} >
                  <Grid container justifyContent={{xs: 'space-evenly', lg: 'space-evenly'}}>
                      {navItems.slice(0,2).map((item) => (
                      <Button key={item} sx={{ color: '#fff', alignContent: 'space evenly'}}>
                        {item}
                      </Button>
                      ))}
                  </Grid>
                
                </Grid>
                <Grid 
                  item sm={4}
                >
                  <Grid container justifyContent='center' alignItems='center' direction='column'>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}
                  >
                    <img src='/Logo.png' alt='Sci-fi Painting Logo'/>
                  </Box>
                  </Grid>
                
                </Grid>
                <Grid item  sm={4} >
                  <Grid container justifyContent={{xs: 'space-evenly', lg: 'space-evenly'}}>
                      {navItems.slice(-2).map((item) => (
                      <Button key={item} sx={{ color: '#fff'} }>
                        {item}
                      </Button>
                      ))}
                  </Grid>
                
                </Grid>
              </Grid>
          </Box>
        
           
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

export default DrawerAppBar;