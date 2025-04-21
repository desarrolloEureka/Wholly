import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import { PurchaseSummaryForm } from "../../../../purchaseSummary/components/PurchaseSummaryForm";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ReceiptOrderHistory } from "./ReceiptOrderHistory";

export const OrderDetailsHistory = ({
  onBackOrder,
}: {
  onBackOrder: () => void;
}) => {
  return (
    <Box sx={{ width: "70%", margin: "0 auto" }}>
      <Button
        onClick={onBackOrder}
        sx={{
          marginTop: "60px",
          minWidth: 0,
          padding: 1,
          border: "none",
          color: "#A5AB94", // color similar al de la imagen
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
        <Typography variant="h5" fontWeight="bold ">
          Order #A010
        </Typography>
        <Typography color="#000000">11/04/2024 </Typography>
        <Typography>{t("PurchaseSummary.Created")}</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
          padding: "10px 50px",
          paddingBottom: "30px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <PurchaseSummaryForm />
      </Box>
      <ReceiptOrderHistory />
    </Box>
  );
};
