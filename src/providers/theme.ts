import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#52524e',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057', // El color secundario de tu aplicación
    },
    background: {
      default: '#f5f5f5', // Color de fondo por defecto
    },
  },
  typography: {
    fontFamily: 'Montserrat', // Definiendo la fuente principal
  },
  // Otros estilos globales que quieras agregar
});

export default theme;
