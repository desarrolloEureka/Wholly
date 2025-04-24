import { Box, Container } from '@mui/material';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import EditProfileForm from '../components/userMenuComponents/editProfileForm/EditProfileForm';
import FooterApp from '../components/footerApp/FooterApp';
import { useParams } from 'react-router-dom';

export const EditProfile = () => {
  const { edit } = useParams();
  console.log('edit????', edit); // "123"
  return (
    <Box justifyContent='space-between'>
      <CustomAppBar />
      <Box className='bg_user_menu'>
        <Container
          component='main'
          sx={{
            width: '100%',
            margin: '0 auto',
            padding: '15px',
            borderRadius: '8px',
          }}
        >
          <EditProfileForm edit={edit} />
        </Container>
      </Box>

      <FooterApp />
    </Box>
  );
};
