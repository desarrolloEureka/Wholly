import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#52524e",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057", // El color secundario de tu aplicación
    },
    background: {
      default: "#f5f5f5", // Color de fondo por defecto
    },
  },
  typography: {
    fontFamily: "Futura, sans-serif", // Fuente por defecto para todo
    h1: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Mango, sans-serif",
      fontWeight: 400,
    },
  },
  // Otros estilos globales que quieras agregar
});

export default theme;
