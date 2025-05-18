import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import { PurchaseSummaryForm } from "../../../../purchaseSummary/components/PurchaseSummaryForm";
import { ReceiptGuideOrder } from "./ReceiptGuideOrder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const OrderDetails = ({ onBackOrder }: { onBackOrder: () => void }) => {
  return (
    <Box sx={{ width: { sm: "80%", xs: "90%" }, margin: "0 auto" }}>
      <Button
        onClick={onBackOrder}
        sx={{
          marginTop: "60px",
          minWidth: 0,
          padding: 1,
          border: "none",
          color: "#A5AB94",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="medium" />
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2%",
          marginBottom: "8%",
          color: "#A5AB94",
        }}
      >
        <Typography variant="h3" fontWeight="bold " fontSize={28}>
          Order #A010
        </Typography>
        <Typography variant="h6" color="#000000">
          11/04/2024{" "}
        </Typography>
        <Typography>{t("PurchaseSummary.Created")}</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
          padding: { xs: "0px 0px", sm: "30px 40px" },
          paddingBottom: { xs: "0px", sm: "30px" },
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <PurchaseSummaryForm />
      </Box>
      <ReceiptGuideOrder />
    </Box>
  );
};
