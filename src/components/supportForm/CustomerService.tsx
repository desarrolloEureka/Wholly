import {
  Typography,
  Box,
  TextField,
  OutlinedInput,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

export const CustomerService = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        pl: { xs: 6, md: 20, lg: 32 },
        pr: { xs: 6, md: 20, lg: 32 },
        pt: { xs: 6, md: 5, lg: 5 },
        pb: { xs: 6, md: 5, lg: 5 },
        textAlign: "center",
        backgroundColor: "#EEF1F0",
        width: "95%",
        margin: "0 auto",
        mt: "50px",
        mb: "5px",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.43)",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            color="#A5AB94"
            borderBottom="1px solid #3C3C3C"
            sx={{
              width: "50%",
              textAlign: "center",
              paddingBottom: "16px",
              marginBottom: "10px",
            }}
          >
            {t("Support.CustomerService")}
          </Typography>
        </Box>

        <Typography color="textSecondary">
          {t("Support.Description")}
        </Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "white",
            borderRadius: "5px",
            "& .MuiInputBase-root": {
              lineHeight: "2em",
            },
          }}
        />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <EmailIcon sx={{ color: "#A5AB94", fontSize: 30 }} />
          <Typography sx={{ color: "#3C3C3C", fontSize: "14px" }}>
            {t("Support.YourEmail")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: { xs: "100%", sm: "45%", md: "35%" },
          }}
        >
          <OutlinedInput
            fullWidth
            sx={{
              height: "39px",
              borderRadius: "12px",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
            }}
            placeholder={t("Support.EmailPlaceholder")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#A5AB94",
            color: "#ffffff",
            borderRadius: "20px",
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#A5AB94" },
          }}
        >
          {t("Support.SendComment")}
        </Button>
      </Box>
    </Box>
  );
};
