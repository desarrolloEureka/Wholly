import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { t } from 'i18next';

export const Code = ({ setCode }: { setCode: (e: string) => void }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        style={{
          fontSize: '0.880rem',
          textAlign: 'center',
          marginTop: '28px',
          marginBottom: '48px',
        }}
      >
        {t('loginForm.verificationCodeText')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Asegúrate de que el contenedor ocupe todo el ancho disponible
          alignItems: 'center',
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            textAlign: 'start',
            width: '72%', // Ajustar el ancho para alinear con el botón
            left: '1px',
          }}
        >
          <Typography
            style={{
              fontSize: '0.770rem',
            }}
          >
            {t('loginForm.code')}
          </Typography>
        </Typography>

        <FormControl
          sx={{
            width: '72%', // Asegura que el formulario tenga el mismo ancho
            height: '35px',
            marginBottom: '22px',
            left: '1px',
          }}
          variant='outlined'
        >
          <OutlinedInput
            id='adornment-code'
            type='text'
            multiline
            sx={{
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
            }}
            startAdornment={<InputAdornment position='start'></InputAdornment>}
            onChange={(e) => setCode(e.target.value)}
          />
        </FormControl>
      </Box>
    </Box>
  );
};
