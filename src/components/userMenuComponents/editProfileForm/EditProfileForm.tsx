import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  MobileStepper,
  Typography,
  IconButton,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { OptionsButtons } from '../../../globals/types';
import { InteractiveText } from '../../../globals/elements';
import { ContentStepper } from '../../registerForm/components/contentStepper/ContentStepper';
import { ContentStepperSpecial } from '../../registerForm/components/contentStepperSpecial/ContentStepperSpecial';
import { EditStepOne } from './components/EditStepOne';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const EditProfileForm = ({ edit }: { edit: string | undefined }) => {
  const navigate = useNavigate();
  const stepOneRef = useRef<{ validateForm: () => boolean }>(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const options2: OptionsButtons[] = [
    { id: 1, name: t('registerForm.options.oilyHair') },
    { id: 2, name: t('registerForm.options.dryHair') },
    { id: 3, name: t('registerForm.options.thinHair') },
    { id: 4, name: t('registerForm.options.hairLoss') },
    { id: 5, name: t('registerForm.options.aLotOfHair') },
    { id: 6, name: t('registerForm.options.LoremIHair') },
    { id: 7, name: t('registerForm.options.LoremIHair') },
    { id: 8, name: t('registerForm.options.LoremIHair') },
    { id: 9, name: t('registerForm.options.LoremIHair') },
    { id: 10, name: t('registerForm.options.LoremIHair') },
    { id: 11, name: t('registerForm.options.LoremIHair') },
    { id: 12, name: t('registerForm.options.LoremIHair') },
    { id: 13, name: t('registerForm.options.LoremIHair') },
    { id: 14, name: t('registerForm.options.LoremIHair') },
    { id: 15, name: t('registerForm.options.LoremIHair') },
    { id: 16, name: t('registerForm.options.LoremIHair') },
  ];

  const options3: OptionsButtons[] = [
    { id: 1, name: t('registerForm.options.walnuts') },
    { id: 2, name: t('registerForm.options.brazilNuts') },
  ];

  const options4: OptionsButtons[] = [
    { id: 1, name: t('registerForm.options.sertraline') },
  ];

  const options5: OptionsButtons[] = [
    { id: 1, name: t('registerForm.options.epilepsy') },
  ];

  const steps = [
    {
      label: t('registerForm.campaignSettings'),
      description: <EditStepOne ref={stepOneRef} />,
    },
    {
      label: '2',
      description: <ContentStepperSpecial />,
    },
    {
      label: '3',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.conditions')}
          title3={t('registerForm.youHave')}
          placeholder='Hair....'
          ButtonsOptions={options2}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '4',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.allergies')}
          title3={t('registerForm.youHave')}
          placeholder='Nuts...'
          ButtonsOptions={options3}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '5',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.medicines')}
          title3={t('registerForm.youHave')}
          placeholder='Sertraline...'
          ButtonsOptions={options4}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
    {
      label: '6',
      description: (
        <ContentStepper
          title1={t('registerForm.selectThe')}
          title2={t('registerForm.diseases')}
          title3={t('registerForm.youHave')}
          placeholder='Epilepsy....'
          ButtonsOptions={options5}
          description={t('registerForm.enterDescription')}
        />
      ),
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    if (stepOneRef.current && !stepOneRef.current.validateForm()) {
      return;
    }
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
        padding: '30px',
        background:
          'linear-gradient(to left,rgba(238, 244, 252, 0.97), #EEF1F02B)', // Gradiente de azul claro a transparente
        borderRadius: '20px',
        backdropFilter: 'blur(4px)', // Efecto de desenfoque
        boxShadow: ' 0px 5px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box sx={{ textAlign: 'end', mt: 1, paddingRight: 2 }}>
        <InteractiveText
          // onClick={() => navigate("/remember")}
          style={{
            textDecoration: 'underline',
            fontFamily: 'sans-serif',
            fontSize: '0.845rem',
            cursor: 'pointer',
          }}
        >
          {t('registerForm.later')}
        </InteractiveText>
      </Box>

      <Box
        sx={{
          width: '100%',
          minHeight: 400,
          p: 2,
          position: 'relative',
        }}
      >
        {edit && (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginLeft: '-150px',
            }}
          >
            <Box
              sx={{
                width: 130,
                height: 130,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <CameraAltIcon sx={{ fontSize: 40, color: '#757575' }} />
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 4,
                  bottom: 4,
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 1,
                }}
              >
                <AddIcon sx={{ fontSize: 16, color: '#757575' }} />
              </IconButton>
            </Box>
          </Box>
        )}
        {steps[activeStep].description}
        {edit && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 40,
              right: 30,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant='outlined'
                sx={{
                  borderRadius: '12px',
                  textTransform: 'none',
                  color: '#3C3C3C',
                  borderColor: '#A5AB94',
                  width: '140px',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#A5AB94',
                  },
                }}
                onClick={() => navigate('/')}
              >
                {t('registerForm.cancel')}
              </Button>

              <Button
                variant='contained'
                sx={{
                  borderRadius: '12px',
                  textTransform: 'none',
                  backgroundColor: '#a8ae9c',
                  color: '#fff',
                  px: 4,
                  width: '140px',

                  '&:hover': {
                    backgroundColor: '#949b89',
                  },
                }}
              >
                {t('registerForm.save')}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
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

export default EditProfileForm;
