import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import LoginForm from "../components/loginForm/LoginForm";

export const Login = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_login_image">
        <CustomAppBar />
        <Container
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: {
              xs: "90%", // 90% del ancho en pantallas extra pequeñas
              sm: "80%", // 70% del ancho en pantallas pequeñas
              md: "50%", // 50% del ancho en pantallas medianas
              lg: "40%", // 40% del ancho en pantallas grandes
              xl: "38%", // 38% del ancho en pantallas extra grandes
            },
          }}
        >
          <LoginForm />
        </Container>
      </Box>

      <FooterApp />
    </Box>
  );
};
