import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import { Facebook, Google, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Card
        sx={{ width: 400, padding: 3, boxShadow: 3, borderRadius: 2 }}
      >
        <CardContent>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img
              src="/logo-placeholder.png" // Replace with your logo's path
              alt="Logo"
              style={{ height: 50, marginBottom: 8 }}
            />
            <Typography variant="h5" fontWeight="bold">
              Welcome To Bazaar
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Email or Phone Number"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, textTransform: 'none', fontWeight: 'bold' }}
          >
            Login
          </Button>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Button
            fullWidth
            variant="contained"
            color="info"
            startIcon={<Facebook />}
            sx={{ textTransform: 'none', mb: 2 }}
          >
            Continue With Facebook
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="error"
            startIcon={<Google />}
            sx={{ textTransform: 'none' }}
          >
            Continue With Google
          </Button>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Typography variant="body2">
              Don’t have an account?{' '}
              <Link href="#" underline="hover">
                Register
              </Link>
            </Typography>

            <Link href="#" underline="hover" variant="body2">
              Forgot your password? Reset It
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
