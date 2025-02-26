import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { t } from 'i18next';
import AddIcon from '@mui/icons-material/Add';

export const RegisterHome = () => {
  const [option, setOption] = useState('');
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 3, md: 15 },
        marginLeft: '4%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start', // Alinea el contenido en la parte superior
          justifyContent: 'flex-start', // Alinea el contenido en la parte superior
          flexDirection: 'column',
          height: '100vh', // Ajusta la altura al 100% de la ventana
          marginTop: '13%',
        }}
      >
        <Typography
          variant='h3'
          sx={{ mb: 4, fontFamily: 'Montserrat ', color: '#3C3C3C' }}
        >
          Register and customize your searches automatically
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: '#333', mb: 4 }}>
          Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit.
          Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend
          tellus nonole tincidunt aliquet.
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: ' #A5AB94', // Cambia el color de fondo (puedes elegir otro color como 'success.main', 'error.main', etc.)
            borderRadius: '10px', // Bordes redondeados
            padding: '10px 20px', // Tamaño del botón
            marginTop: '18px',
            textTransform: 'none',
            width: 145,
            // color: 'white',
            '&:hover': {
              backgroundColor: 'rgb(87, 90, 77)', // Color en el hover
            },
          }}
          disableElevation
        >
          {t('loginForm.register')}
        </Button>
      </Box>
      {/* pendiente */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          marginTop: '5%',
          marginLeft: '1%',
          marginRight: '7%',
          width: '60%',

          height: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            backgroundColor: '#E8E4DF',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            boxShadow: 5,
            width: '100%',
            margin: '15px 10px',
            height: 'auto',
            padding: '20px',
            textAlign: 'left',
            overflow: 'hidden',
          }}
        >
          {/* Botón de cierre */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onClick={() => console.log('Cerrar')}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant='h1'
            sx={{
              fontSize: '1.1rem',
              marginBottom: '10px',
              fontWeight: 'bold',
              fontFamily: 'Inter',
              color: '#333',
            }}
          >
            Enter your trends
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              color: '#333',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus
            non tincidunt aliquet. Fusce aliquam mi felis.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Accordion
            sx={{
              border: '1px solid #ccc',
              borderRadius: '30px !important', // Forzar el borde redondeado
              overflow: 'hidden',
              '&:before': { display: 'none' },
              '&.MuiPaper-root': {
                borderRadius: '30px !important', // Sobrescribe estilos predeterminados
              },
            }}
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
          >
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>Sección 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Contenido de la sección 1. Puedes poner cualquier información
                aquí.
              </Typography>
              <Typography>
                Contenido de la sección 1. Puedes poner cualquier información
                aquí.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            displayEmpty
            sx={{
              mt: 3,
              width: '100%',
              borderRadius: '50px',
              height: '50px',
              border: '1px solid #A5AB94', // Color inicial del borde
              '&:hover': {
                borderColor: 'rgb(87, 90, 77)', // Color del borde al pasar el mouse
              },
            }}
          >
            <MenuItem value='' disabled>
              Enter your allergies
            </MenuItem>
            <MenuItem value='opcion1'>Opción 1</MenuItem>
            <MenuItem value='opcion2'>Opción 2</MenuItem>
            <MenuItem value='opcion3'>Opción 3</MenuItem>
          </Select>
          <Select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            displayEmpty
            sx={{
              mt: 3,
              width: '100%',
              borderRadius: '50px',
              height: '50px',
              border: '1px solid #A5AB94', // Color inicial del borde
              '&:hover': {
                borderColor: 'rgb(87, 90, 77)', // Color del borde al pasar el mouse
              },
            }}
          >
            <MenuItem value='' disabled>
              Enter your illnesses{' '}
            </MenuItem>
            <MenuItem value='opcion1'>Opción 1</MenuItem>
            <MenuItem value='opcion2'>Opción 2</MenuItem>
            <MenuItem value='opcion3'>Opción 3</MenuItem>
          </Select>
          <Select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            displayEmpty
            sx={{
              mt: 3,
              width: '100%',
              borderRadius: '50px',
              height: '50px',
              border: '1px solid #A5AB94', // Color inicial del borde
              '&:hover': {
                borderColor: 'rgb(87, 90, 77)', // Color del borde al pasar el mouse
              },
            }}
          >
            <MenuItem value='' disabled>
              Enter your medications
            </MenuItem>
            <MenuItem value='opcion1'>Opción 1</MenuItem>
            <MenuItem value='opcion2'>Opción 2</MenuItem>
            <MenuItem value='opcion3'>Opción 3</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};
