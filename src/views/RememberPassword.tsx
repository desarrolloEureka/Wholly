import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { RememberForm } from "../components/rememberForm/RememberForm";

export const RememberPassword = () => {
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
            minHeight: "80vh",
            width: "100%", // Asegura que se ajuste al ancho máximo
          }}
        >
          <RememberForm />
        </Container>
      </Box>
      <FooterApp />
    </Box>
  );
};
