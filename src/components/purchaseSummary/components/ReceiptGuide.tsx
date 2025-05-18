import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ReceiptGuide = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Contenedor principal con dos columnas */}
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
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          display: "flex",
          borderRadius: "12px", // Bordes redondeados
          width: { xs: "42%", sm: "22%" }, // Ajusta el tamaño del botón
          height: "4%", // Tamaño fijo para evitar que se deforme
          backgroundColor: "#A5AB94", // Color primario
          textDecoration: "underline",
          justifyContent: "center", // Centra el texto dentro del botón
          alignItems: "center",
          marginLeft: "22px",
          margin: { xs: "0 auto", md: "0px" },
          marginBottom: "50px",
          marginTop: "20px",
          fontSize: "13px",
        }}
      >
        {t("PurchaseSummary.ReturnButton")}
      </Button>
    </Box>
  );
};
