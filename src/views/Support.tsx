import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";

export const Support = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_Blog">
        <CustomAppBar />
      </Box>
      <Typography sx={{ transform: "translate(-40%, -90%)" }}>
        holaffffffffff
      </Typography>

      <FooterApp />
    </Box>
  );
};
