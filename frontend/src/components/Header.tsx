
import  AppBar  from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Logo from "./shared/Logo";
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

export const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{bgcolor: "transparent", position:"static", boxShadow:"none" }}
      >
      <Toolbar sx={{display: "flex" }}>
        <Logo/>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg = "#00fffc"
                to = "/Chat"
                text="Go To Chat"
                textColor='black'
              />
              <NavigationLink
                bg='#51538f'
                textColor='white'
                to='/'
                text='logout'
                onClick={auth.logout}
              />
            </>
          ): (
          <>
              <NavigationLink
                bg = "#00fffc"
                to = "/Login"
                text="Login"
                textColor='black'
              />
              <NavigationLink
                bg='#51538f'
                textColor='white'
                to='/Signup'
                text='Signup'
              />
          </>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
