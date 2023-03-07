import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { LogoDev, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => {
  return {
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  };
});

const Icons = styled(Box)(({ theme }) => {
  return {
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  };
});

const UserBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  };
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          DIV
        </Typography>
        <LogoDev sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={11} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Miranda Cohen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2EwZGxrzoWWhiDst647sBEXdGOnS2lmynBhD8iherGxYoTEzNlrGUF_uPiJIPYTyPlE&usqp=CAU"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Miranda Cohen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2EwZGxrzoWWhiDst647sBEXdGOnS2lmynBhD8iherGxYoTEzNlrGUF_uPiJIPYTyPlE&usqp=CAU"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          />
          <Typography variant="subtitle2">Miranda Cohen</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

/**
- App Bar
The App Bar displays information and actions relating to the current screen.

-Badge
Badge generates a small badge to the top-right of its child(ren).

 */
