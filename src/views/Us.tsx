import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { OurStory } from "../components/usComponents/OurStory";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export const Us = () => {
  return (
    <Box justifyContent="space-between">
      <Box className="bg_Blog">
        <CustomAppBar />
        <Typography>hola mundo</Typography>
        <AddReactionIcon />
      </Box>
      <OurStory />

      <FooterApp />
    </Box>
  );
};
