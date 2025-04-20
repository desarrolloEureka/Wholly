import { Box, Container } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import EditProfileForm from "../components/userMenuComponents/editProfileForm/EditProfileForm";
import FooterApp from "../components/footerApp/FooterApp";

export const EditProfile = () => {
  return (
    <Box justifyContent="space-between">
      <CustomAppBar />
      <Box className="bg_user_menu">
        <Container
          component="main"
          sx={{
            width: "100%",
            margin: "0 auto",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <EditProfileForm />
        </Container>
      </Box>

      <FooterApp />
    </Box>
  );
};
