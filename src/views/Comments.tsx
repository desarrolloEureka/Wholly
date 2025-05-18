import { Box, Typography } from "@mui/material";
import FooterApp from "../components/footerApp/FooterApp";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import { useTranslation } from "react-i18next";
import { CommentsSesion } from "../components/comments/CommentsSesion";
import ReviewScore from "../components/comments/ReviewScore";

export const Comments = () => {
  const { t } = useTranslation();

  return (
    <Box justifyContent="space-between">
      <CustomAppBar />
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: "center", sm: "center", lg: "start" },
          width: "100%",
          mt: { xs: "10%", sm: "5%", lg: "5%" },
          ml: { sm: "0px", lg: "5%" },
          fontSize: "1.6rem",
          fontWeight: 600,
          color: "#3C3C3C",
        }}
      >
        {t("Comments.knoWcomments")}
      </Typography>
      <ReviewScore />
      <CommentsSesion />

      <FooterApp />
    </Box>
  );
};
