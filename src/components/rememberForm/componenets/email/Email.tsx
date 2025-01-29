import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { t } from 'i18next';
import EmailIcon from '@mui/icons-material/Email';

export const Email = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <p
        style={{
          fontSize: '0.880rem',
          textAlign: 'center',
          marginTop: '28px',
          marginBottom: '18px',
        }}
      >
        {t('loginForm.passwordRecoveryText')}
      </p>
      <Box
        sx={{
          minWidth: '85%',
          display: 'flex', // Usamos flexbox para centrar
          flexDirection: 'column', // Alineamos verticalmente
          alignItems: 'center', // Centramos horizontalmente
          justifyContent: 'center', // Centramos verticalmente
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            width: '310px', // Igual al ancho del contenedor del texto
            marginTop: '20px',
          }}
        >
          <p
            style={{
              fontSize: '0.770rem',
              textAlign: 'start',
              margin: 0, // Eliminamos el margen predeterminado de <p>
            }}
          >
            {t('loginForm.email')}
          </p>
        </Typography>

        <FormControl
          sx={{
            width: '310px', // Igual al ancho del campo de texto
          }}
          variant='outlined'
        >
          <OutlinedInput
            id='outlined-adornment-email'
            type='email'
            placeholder={t('loginForm.gmail_example')}
            multiline
            sx={{
              width: '100%', // Ocupará todo el ancho del contenedor padre
              fontSize: '0.875rem',
              padding: '8px 8px',
              height: '100%',
              lineHeight: '1.5',
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'gray',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#A5AB94',
              },
              marginBottom: '20px',
            }}
            startAdornment={
              <InputAdornment position='start'>
                <EmailIcon fontSize='small' />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};
