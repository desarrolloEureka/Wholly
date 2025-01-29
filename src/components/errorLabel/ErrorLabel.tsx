import { Box, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

const ErrorLabel = ({ text }: { text: string }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      gap={1} // Espaciado entre ícono y texto
      sx={{
        color: 'error.main', // Color rojo para mensajes de error
        fontSize: '0.875rem', // Tamaño del texto
      }}
    >
      <Error fontSize='small' />
      <Typography variant='body2'>{text}</Typography>
    </Box>
  );
};

export default ErrorLabel;
