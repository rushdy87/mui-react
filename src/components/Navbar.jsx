import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
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
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Miranda Cohen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2EwZGxrzoWWhiDst647sBEXdGOnS2lmynBhD8iherGxYoTEzNlrGUF_uPiJIPYTyPlE&usqp=CAU"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="subtitle2">Miranda Cohen</Typography>
        </UserBox>
      </StyledToolbar>
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
