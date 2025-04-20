import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ReceiptOrderHistory = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Contenedor de resumen y guía */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 22,
          padding: "20px",
          marginTop: "40px",
        }}
      >
        {/* Contenedor 1: Resumen */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#F1F3F7",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              width: "300px",
            }}
          >
            <Box sx={{ textAlign: "left", color: "rgba(0, 0, 0, 0.75)" }}>
              <Typography sx={{ marginBottom: "8px" }}>
                {t("PurchaseSummary.Subtotal")}
              </Typography>
              <Typography sx={{ marginBottom: "8px" }}>
                {t("PurchaseSummary.Discounts")}
              </Typography>
              <Typography sx={{ marginBottom: "8px" }}>
                {t("PurchaseSummary.ShippingCost")}
              </Typography>
              <Typography
                sx={{ marginBottom: "8px", fontSize: "18px", color: "#000" }}
              >
                {t("PurchaseSummary.Total")}
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right", color: "rgba(0, 0, 0, 0.75)" }}>
              <Typography sx={{ marginBottom: "8px" }}>$64.18</Typography>
              <Typography sx={{ marginBottom: "8px" }}>-</Typography>
              <Typography sx={{ marginBottom: "8px" }}>$0</Typography>
              <Typography
                sx={{ marginBottom: "8px", fontSize: "18px", color: "#000" }}
              >
                $64.18
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Contenedor 2: Guía */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#F1F3F7",
              padding: "35px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              width: "400px",
            }}
          >
            <Box color="rgb(40, 40, 40)">
              <Typography sx={{ marginBottom: "8px", fontWeight: 300 }}>
                {t("PurchaseSummary.GuideNumber")}
              </Typography>
              <Typography sx={{ marginBottom: "8px", fontWeight: 300 }}>
                {t("PurchaseSummary.TrackOrder")}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "right", color: "rgba(0, 0, 0, 0.63)" }}>
              <Typography sx={{ marginBottom: "8px" }}>52856341</Typography>
              <Typography
                sx={{ marginBottom: "8px", textDecoration: "underline" }}
              >
                www.transport/usa/a.....
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bloque de calificación y comentarios DEBAJO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#F1F3F7",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          margin: "40px 20px",
          height: "260px",
        }}
      >
        {/* Columna de calificación */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontSize: "17px" }}>
            {t("OrdersHistory.Qualification")}
          </Typography>

          <Rating
            name="order-rating"
            defaultValue={4}
            precision={1}
            size="large"
            sx={{
              fontSize: "40px",
              color: "#A5AB94",
              mb: 2,
              "& .MuiRating-iconEmpty": {
                color: "#A5AB94",
                opacity: 0.5,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A5AB94",
              color: "#fff",
              borderRadius: "20px",
              padding: "12px 32px",
              fontSize: "19px",
              height: "40px",
              marginTop: "45px",
              textTransform: "none",
              fontWeight: 500,
              ":hover": {
                backgroundColor: "#91977F",
              },
            }}
          >
            {t("OrdersHistory.SendComment")}
          </Button>
        </Box>

        {/* Columna de comentarios */}
        <Box sx={{ flex: 2, ml: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontSize: "17px" }}>
            {t("OrdersHistory.Comments")}
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={7}
            placeholder="Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "14px",
                color: "#666",
                borderBottom: "1px dashed #aaa",
                "&:not(:last-child)": {
                  marginBottom: "12px",
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
