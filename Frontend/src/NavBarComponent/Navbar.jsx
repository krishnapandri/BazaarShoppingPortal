import React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, MenuItem, Select, Box } from '@mui/material';
import { Person, Twitter, Facebook, Instagram } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import CartSidebar from '../CartSidebar/CartSidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    marginLeft: theme.spacing(1),
  }));

export const Navbar = () => {
  return (
    <AppBar position="static" color="default">
        <Toolbar sx={{ backgroundColor: '#1c2430', color: '#ffffff', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Box sx={{ backgroundColor: '#f50057', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold', marginRight: 2 }}>
              HOT
            </Box>
            <Typography variant="body2">Free Express Shipping</Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <Select defaultValue="EN" variant="standard" disableUnderline sx={{ color: '#ffffff', marginRight: 2 }}>
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
            </Select>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
          </Box>
        </Toolbar>

        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
          <Box display="flex" alignItems="center">
            <img src="https://template.getbazaar.io/assets/images/logo2.svg" alt="Logo" style={{ height: 40, marginRight: 10 }} />
          </Box>

          {/* <SearchBar>
            <IconButton><Search /></IconButton>
            <TextField id="outlined-search" label="Search field" type="search" />
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ marginLeft: 2 }}>All Categories</Typography>
            </Box>
          </SearchBar> */
          }

            <div class="input-group inputgro" style={{border:'1px solid rgb(0 0 0 / 18%)',borderRadius:'8px',width:'35%'}}>
                <div class="input-group-prepend" style={{border:'none',borderRight:'1px solid rgb(0 0 0 / 18%)'}}>
                    <span class="input-group-text backgroundNone border-none" id="basic-addon1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>
                <input type="text" class="form-control backgroundNone" style={{border:'none'}} placeholder="Searching For.." aria-label="Username" aria-describedby="basic-addon1"/>
                {/* <div class="input-group-append appendDiv">
                    <span class="input-group-text backgroundNone border-none" id="basic-addon1">
                        <Typography variant="body2">All Categories</Typography>
                    </span>
                </div> */}
            </div>


          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <Person />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <CartSidebar />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
    </AppBar>
  );
};

