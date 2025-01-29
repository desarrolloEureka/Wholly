import { Box, Container } from '@mui/material';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import FooterApp from '../components/footerApp/FooterApp';
import RegisterForm from '../components/registerForm/RegisterForm';

export const Register = () => {
  return (
    <Box justifyContent='space-between'>
      <Box className='bg_register_image'>
        <CustomAppBar />

        <Container
          component='main'
          sx={{
            width: '100%',
            margin: '0 auto',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '2%',
          }}
        >
          <RegisterForm />
        </Container>
      </Box>

      <FooterApp />
    </Box>
  );
};
