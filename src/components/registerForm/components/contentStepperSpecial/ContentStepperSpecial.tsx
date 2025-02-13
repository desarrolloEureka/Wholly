import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { t } from 'i18next';

export const ContentStepperSpecial = () => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h5'
          sx={{ fontFamily: 'Inter', fontSize: '27px', marginBottom: '18px' }}
        >
          {t('select the ')}
          <span
            style={{
              fontFamily: 'Gabriela',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {t('trends')}
          </span>
          {t(' you have')}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.9em',
          }}
        >
          Enter the name of what you are looking for as many times as you need
          and add them one by one.
        </Typography>
      </Box>

      {/* Contenedor de botones alineados horizontalmente */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginTop: '18px',
          marginBottom: '18px',
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#A5AB94',
            borderRadius: '16px',
            padding: '5px 75px',
            textTransform: 'none',
            boxShadow: '0px 2px 9px rgba(26, 26, 26, 0.16)',
            '&:hover': {
              backgroundColor: 'rgb(87, 90, 77)',
            },
          }}
          disableElevation
        >
          {t('Acne')}
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          sx={{
            border: '1px solid #A5AB95',
            color: '#000',
            borderRadius: '7px',
            padding: '5px 40px',
            textTransform: 'none',
            minWidth: '130px',
          }}
        >
          {t('Facial acne')}
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '16%',
            padding: '3px',
            border: '1px solid  #A5AB95',
            borderRadius: '5px',
          }}
        >
          <Typography sx={{ marginRight: '4px' }}>other:</Typography>
          <TextField
            id='custom-input'
            variant='standard'
            size='small'
            InputProps={{
              disableUnderline: false,
              sx: {
                '&:after': {
                  borderBottom: '1px solid rgb(87, 90, 77)', // Color de la línea al hacer clic
                },
              },
            }}
            sx={{
              width: '65%',

              '& .MuiInputBase-input': {
                padding: '4px',
                fontSize: '12px',
              },
            }}
          />
        </Box>
        <IconButton
          onClick={() => console.log('Botón clickeado')}
          sx={{
            fontSize: '1.0em',
            color: 'black',
            '&:hover': {
              color: ' rgb(96, 102, 75)',
            },
          }}
        >
          <AddCircleOutlineIcon />
          Other
        </IconButton>
      </Box>
    </Box>
  );
};
