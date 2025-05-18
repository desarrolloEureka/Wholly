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
          flexDirection: { xs: "column", sm: "row" },

          gap: { xs: 10, sm: 2, md: "146px" },
          padding: "20px",
          marginTop: "40px",
        }}
      >
        {/* Contenedor 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F1F3F7",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: { xs: "100%", sm: "400px", md: "400px" },
          }}
        >
          {/* Columna izquierda */}
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

          {/* Columna derecha */}
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
        {/* Contenedor 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F1F3F7",
              padding: "35px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              width: { xs: "100%", sm: "300px", md: "400px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
              <Box>
                <Typography sx={{ marginBottom: "8px", fontWeight: 300 }}>
                  {t("PurchaseSummary.TrackOrder")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  52856341
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
              <Box>
                <Typography sx={{ marginBottom: "8px", fontWeight: 300 }}>
                  {t("PurchaseSummary.GuideNumber")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  sx={{
                    marginBottom: "8px",
                    textDecoration: "underline",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    maxWidth: "100%",
                    whiteSpace: "normal",
                  }}
                >
                  www.transport/usa/a.....
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // mobile
            sm: "column", // tablets
            md: "row", // desktop
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          backgroundColor: "#F1F3F7",
          padding: {
            xs: "20px",
            md: "30px",
          },
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          margin: {
            xs: "20px 10px",
            md: "40px 20px",
          },
          height: {
            xs: "auto",
            md: "260px",
          },
        }}
      >
        {/* Columna de calificación */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontSize: "22px" }}>
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
        <Box sx={{ flex: 2, ml: { xs: 0, md: 4 }, width: "100%" }}>
          <Typography variant="h5" sx={{ mb: 2, fontSize: "22px" }}>
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
