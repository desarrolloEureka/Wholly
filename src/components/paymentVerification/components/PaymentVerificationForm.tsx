import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const PaymentVerificationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isclicked, setIsClicked] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography
        color={isclicked ? "#A5AB94" : "##FF0000"}
        variant="h4"
        gutterBottom
        onClick={() => setIsClicked(!isclicked)}
        sx={{ marginBottom: "30px" }}
      >
        {isclicked == true
          ? t("payForm.SuccessfulPurchase")
          : "declined payment"}
      </Typography>
      <Typography
        color="#767676"
        gutterBottom
        sx={{
          fontSize: "17px",
          marginBottom: "30px",
          width: "98%",
          textAlign: "center",
        }}
      >
        {t("payForm.Description")}
      </Typography>
      <Box display="flex" gap={6} mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/PurchaseSummary")}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "#A5AB94",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: 0,
                width: "90%",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                transform: "translateX(-50%)",
              },
            }}
          >
            {isclicked == true ? t("payForm.SeeOrder") : "retry payment"}
          </Typography>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/ShoppingCart")}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "#A5AB94",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: 0,
                width: "90%",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                transform: "translateX(-50%)",
              },
            }}
          >
            {t("payForm.ReturnToBeginning")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
