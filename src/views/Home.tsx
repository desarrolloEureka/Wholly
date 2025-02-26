import { Box, Container, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { HomeForm } from "../components/homeForm/components/homeSupplement/HomeSupplement";
import { RegisterHome } from "../components/homeForm/components/registerHome/RegisterHome";
import { HomeExclusive } from "../components/homeForm/components/homeExclusive/HomeExclusive";
import { HomeCare } from "../components/homeForm/components/homeCare/HomeCare";

export const Home = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_Home_image">
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
              sm: "70%", // 70% del ancho en pantallas pequeñas
              md: "50%", // 50% del ancho en pantallas medianas
              lg: "40%", // 40% del ancho en pantallas grandes
              xl: "38%", // 38% del ancho en pantallas extra grandes
            },
            marginRight: "100px", // Mueve el contenedor hacia la derecha
          }}
        >
          <HomeForm />
        </Container>
      </Box>
      <RegisterHome />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "10px",
            fontWeight: "bold",
            fontFamily: "Gabriela",
            color: "#3C3C3C",
          }}
        >
          variety
        </Typography>
      </Box>
      <HomeExclusive />
      <HomeCare />

      <FooterApp />
    </Box>
  );
};
