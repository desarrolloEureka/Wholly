import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Email } from './components/email/Email';
import { useState } from 'react';
import { Code } from './components/code/Code';
import { useNavigate } from 'react-router-dom';
import { Passwords } from './components/passwords/Passwords';

export const RememberForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [code, setCode] = useState<string | null>(null);

  const stepper = () => {
    switch (step) {
      case 1:
        return <Code setCode={setCode} />;
      case 2:
        return <Passwords />;

      default:
        return <Email />;
    }
  };
  const handleContinue = () => {
    if (step == 0) {
      const validEmail = true;
      if (validEmail) {
        setStep(1);
      } else {
        console.log('entro al else');
      }
    } else if (step == 1) {
      if (!code) {
        setStep(2);
      } else {
        console.log('codigo invalido');
      }
    } else {
      navigate('/');
      console.log('validar contrasenas');
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
        width: '45%',
        marginTop: '60px',
        marginBottom: '45px',
      }}
    >
      <h1 style={{ fontSize: '1.880rem', color: ' #A5AB94' }}>
        {t('loginForm.Recover_password')}
      </h1>
      <Box
        sx={{
          height: '1px', // Ajusta la altura según lo necesites
          width: '105%',
          backgroundColor: ' #A5AB94',
          marginTop: '14px',
        }}
      />

      {stepper()}
      <Button
        variant='contained'
        sx={{
          backgroundColor: ' #A5AB94',
          borderRadius: '25px',
          padding: '10px 20px', // Tamaño del botón
          marginTop: '18px',
          textTransform: 'none',

          '&:hover': {
            backgroundColor: 'rgb(87, 90, 77)', // Color en el hover
          },
        }}
        disableElevation
        onClick={handleContinue}
      >
        {step == 0
          ? t('loginForm.button_step_one')
          : step == 1
          ? t('loginForm.button_step_two')
          : t('loginForm.button_step_three')}
      </Button>
    </Box>
  );
};
