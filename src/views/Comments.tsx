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
        variant="h6"
        sx={{
          textAlign: "start",
          width: "100%",
          mt: "5%",
          ml: "5%",
          fontSize: "1.8rem",
          fontWeight: 100,
          color: "#000",
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
