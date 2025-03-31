import { Box, Typography } from "@mui/material";
import { Blogin } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export const CareSession = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "80%",
          margin: "0 auto",
          transform: "translate(-0%, -14%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={Blogin} alt="Blog Image" />
            <Box
              marginLeft="30px"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "20px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  maxWidth: "97%",
                  marginBottom: "40px",
                  fontSize: "1.65rem",
                  color: "#A5AB94",
                  marginTop: "20px",
                }}
              >
                {t("blogForm.title")}
              </Typography>

              <Typography
                sx={{
                  maxWidth: "90%",
                  whiteSpace: "pre-line",
                  fontSize: "1.2rem",
                  color: "#6E6E6E",
                }}
              >
                {t("blogForm.paragraph1")}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                maxWidth: "95%",
                whiteSpace: "pre-line",
                fontSize: "1.2rem",
                color: "#6E6E6E",
                marginTop: "50px",
              }}
            >
              {t("blogForm.paragraph2")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
