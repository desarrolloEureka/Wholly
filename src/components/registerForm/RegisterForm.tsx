import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  MobileStepper,
  Typography,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { StepOne } from './components/StepOne';

const RegisterForm = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: 'Select campaign settings',
      description: <StepOne />,
    },
    {
      label: 'Select campaign settings',
      description: <StepOne />,
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        background:
          'linear-gradient(to left,rgba(238, 244, 252, 0.97), #EEF1F02B)', // Gradiente de azul claro a transparente
        borderRadius: '20px',
        backdropFilter: 'blur(4px)', // Efecto de desenfoque
        boxShadow: ' 0px 5px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box sx={{ width: '100%', p: 2 }}>{steps[activeStep].description}</Box>
      <MobileStepper
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{
          backgroundColor: 'transparent',
        }}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <Typography>{t('stepper.nextButton')}</Typography>

            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <Typography>{t('stepper.backButton')}</Typography>
          </Button>
        }
      />
    </Box>
  );
};

export default RegisterForm;
