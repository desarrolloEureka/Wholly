import { Box, Container, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { PurchaseSummaryForm } from "../components/purchaseSummary/components/PurchaseSummaryForm";
import { ReceiptGuide } from "../components/purchaseSummary/components/ReceiptGuide";
import { useTranslation } from "react-i18next";

export const PurchaseSummary = () => {
  const { t } = useTranslation();

  return (
    <Box justifyContent="space-between">
      <CustomAppBar />
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column", // Hace que los elementos estén en columnas
          paddingRight: { xs: "0px", md: "16px" },
          paddingLeft: { xs: "0px", md: "16px" },
          alignItems: "center",
          minHeight: "90vh",
          width: {
            xs: "90%",
            sm: "100%",
            md: "100%",
            lg: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10%",
            marginBottom: "8%",
            color: "#A5AB94",
          }}
        >
          <Typography variant="h3" fontWeight={500} fontSize={28}>
            Order #A010
          </Typography>
          <Typography variant="h6" color="#000000">
            11/04/2024
          </Typography>
          <Typography>{t("PurchaseSummary.Created")}</Typography>
        </Box>
        <Box sx={{ width: { xs: "94%", md: "84%" } }}>
          <Box
            sx={{
              backgroundColor: "#E8E4DE",
              padding: { xs: "0px 0px", md: "10px 50px" },
              paddingBottom: { xs: "0px", md: "30px" },
              width: "100%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <PurchaseSummaryForm />
          </Box>
          <ReceiptGuide />
        </Box>
      </Container>

      <FooterApp />
    </Box>
  );
};
