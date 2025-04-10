import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import EditProfileForm from "../components/editProfileForm/EditProfileForm";
import FooterApp from "../components/footerApp/FooterApp";

export const EditProfile = () => {
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      <Container
        component="main"
        sx={{
          width: "100%",
          margin: "0 auto",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "2%",
        }}
      >
        <EditProfileForm />
      </Container>

      <FooterApp />
    </Box>
  );
};
