import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { logo_app } from '../../assets/images';
import { InteractiveText } from '../../globals/elements';
import ErrorLabel from '../errorLabel/ErrorLabel';

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [errorTerms, setErrorTerms] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const textError = {
    terms: t('loginForm.errorTerms'),
    email: t('loginForm.errorEmail'),
    password: t('loginForm.errorPassword'),
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    setIsLogged(true);
    if (!errorTerms && !errorEmail && !errorPassword) {
      console.log('hace el login');
      setIsLogged(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: 8,
        width: '100%',
        marginTop: '60px',
        marginBottom: '45px',
      }}
    >
      <img src={logo_app} alt='logo' style={{ width: '60%' }} />

      {/* <img style={{ width: "100%" }} src={logo_app} alt="logo" /> */}
      <Box
        sx={{
          height: '1px', // Ajusta la altura según lo necesites
          width: '98%',
          backgroundColor: ' #A5AB94',
          marginTop: '38px',
          marginBottom: '22px', // Espaciado entre el texto y el input
        }}
      />
      {isLogged && (
        <ErrorLabel
          text={
            errorTerms
              ? textError.terms
              : errorEmail
              ? textError.email
              : textError.password
          }
        />
      )}

      <Box
        component='form'
        sx={{ m: 1, width: '100%' }}
        noValidate
        autoComplete='off'
      >
        <Box
          sx={{
            width: '100%',
            height: '10vh', // Asegura que el contenedor ocupe toda la altura de la ventana
            display: 'flex', // Habilita el modelo flexbox
            flexDirection: 'column', // Alinea los elementos hijos en columna
            justifyContent: 'center', // Centra verticalmente
            alignItems: 'center', // Centra horizontalmente
          }}
        >
          {/* Texto de la etiqueta */}
          <Typography
            variant='subtitle1'
            sx={{
              width: '82%', // Coincide con el ancho del campo de entrada
              fontSize: '0.880rem', // Ajusta el tamaño del texto
              textAlign: 'left', // Alinea el texto a la izquierda
            }}
          >
            {t('loginForm.email')}
          </Typography>

          {/* Campo de entrada */}
          <FormControl
            sx={{
              width: '82%', // Ajusta el ancho del campo de entrada
              height: '35px',
            }}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-email'
              type='email'
              sx={{
                fontSize: '0.875rem',
                padding: '8px 8px',
                height: '100%',
                lineHeight: '1.5',
                borderRadius: '8px',
              }}
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon fontSize='small' />
                </InputAdornment>
              }
              onChange={(e) => {
                setIsLogged(false);
                if (e.target.value == '') {
                  setEmail('');
                  setErrorEmail(true);
                } else {
                  setEmail(e.target.value);
                  setErrorEmail(false);
                }
              }}
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Texto de la etiqueta */}
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: '0.880rem',
              width: '82%', // Igualar al ancho del FormControl
              textAlign: 'sartar',
              marginTop: '22px',
            }}
          >
            {t('loginForm.password')}
          </Typography>

          {/* Contenedor del input */}
          <FormControl
            sx={{
              width: '82%', // Igualar al ancho del texto
              height: '35px',
            }}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              sx={{
                fontSize: '0.875rem',
                padding: '6px 8px',
                height: '100%',
                lineHeight: '1.5',
                borderRadius: '8px',
              }}
              startAdornment={
                <InputAdornment position='start'>
                  <KeyIcon
                    sx={{
                      transform: 'rotate(130deg)',
                    }}
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => {
                setIsLogged(false);
                if (e.target.value == '') {
                  setPassword('');
                  setErrorPassword(true);
                } else {
                  setPassword(e.target.value);
                  setErrorPassword(false);
                }
              }}
            />
          </FormControl>

          {/* Enlace interactivo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              width: '82%', // Igualar al ancho del texto y del input
              marginTop: '8px', // Espaciado superior para separar del input
            }}
          >
            <Typography>
              <InteractiveText
                onClick={() => navigate('/remember')}
                data-position='end'
                style={{
                  textDecoration: 'underline',
                  fontSize: '0.845rem',
                  cursor: 'pointer', // Cambia el cursor al pasar sobre el enlace
                }}
              >
                {t('loginForm.forgotPassword')}
              </InteractiveText>
            </Typography>
          </Box>
        </Box>
      </Box>

      <FormGroup
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: 'default', // Color por defecto cuando no está marcado
                '&.Mui-checked': {
                  color: ' #A5AB94', // Color cuando está marcado
                },
              }}
              onChange={(e) => {
                setIsLogged(false);
                if (!e.target.checked) {
                  setErrorTerms(true);
                } else {
                  setErrorTerms(false);
                }
              }}
            />
          }
          label={undefined}
        />
        <Box sx={{ marginLeft: -3 }}>
          <span
            style={{
              fontSize: '0.720rem',
            }}
          >
            {/* multilenguaje */}
            {t('loginForm.accept')}{' '}
            <a
              href='/documents/politica.pdf'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                color: 'black',
                textDecoration: 'underline', // Aplica el subrayado al texto
              }}
            >
              {/* multilenguaje */}
              {t('loginForm.termsAndConditions')}
            </a>
            <span
              style={{
                color: '#ccc',
                marginLeft: 4,
                marginRight: 4,
              }}
            >
              |
            </span>
            <a
              href='/documents/politica.pdf'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                color: 'black',
                textDecoration: 'underline', // Aplica el subrayado al texto
              }}
            >
              {/* multilenguaje */}
              {t('loginForm.privacyPolicy')}
            </a>
          </span>
        </Box>
      </FormGroup>

      <Button
        variant='contained'
        sx={{
          backgroundColor: ' #A5AB94', // Cambia el color de fondo (puedes elegir otro color como 'success.main', 'error.main', etc.)
          borderRadius: '25px', // Bordes redondeados
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
        onClick={handleLogin}
      >
        {t('loginForm.login')}
      </Button>
    </Box>
  );
};

export default LoginForm;
