import { Box, CircularProgress, Typography } from "@mui/material";
import { Blogin } from "../../../assets/images";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../globals/config/config";

export const CareSession = ({ blog, loading }: any) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "80%",
          margin: "0 auto",
          transform: "translate(-0%, -14%)",
        }}
      >
        <Box sx={{ padding: "20px 40px" }}>
          <Box
            component="img"
            src={blog?.image ? `${ConfigConstants.webServiceName}${blog.image}` : Blogin}
            alt="Blog Image"
            sx={{
              width: { xs: "100%", md: "400px" },
              maxHeight: "400px",
              minHeight: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              float: { xs: "none", md: "left" },
              marginRight: { xs: 0, md: "24px" },
              marginBottom: { xs: "24px", md: "24px" },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              maxWidth: "82%",
              marginBottom: "40px",
              fontSize: "1.3rem",
              color: "#A5AB94",
              marginTop: "20px",
            }}
          >
            {currentLang === "es"
              ? blog.name_spanish || blog.name_english
              : blog.name_english || blog.name_spanish}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#6E6E6E",
              whiteSpace: "pre-line",
              textAlign: "justify",
            }}
          >
            {currentLang === "es"
              ? blog.description_spanish || blog.description_english
              : blog.description_english || blog.description_spanish}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
