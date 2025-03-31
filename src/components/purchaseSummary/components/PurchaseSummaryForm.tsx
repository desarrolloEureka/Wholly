import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export const PurchaseSummaryForm = () => {
  const { t } = useTranslation();

  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: "Lorem Ipsum x",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      src: Session_2,
      title: "Lorem Ipsum y",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 3,
      src: variety2,
      title: "Lorem Ipsum z",
      price: 15.99,
      quantity: 1,
    },
  ]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          fontWeight: "bold",
          position: "relative",
          paddingBottom: "20px",
          color: "#A5AB94",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "1%", // Ajusta la posición
            width: "96%", // Ajusta el largo del borde
            borderBottom: "1px solid #A5AB94",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "12px", flex: 3, textAlign: "center" }}
        >
          {t("PurchaseSummary.Products")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "12px", flex: 0.8, textAlign: "center" }}
        >
          {t("PurchaseSummary.Amount")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "12px", flex: 1.9, textAlign: "center" }}
        >
          {t("PurchaseSummary.UnitValue")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "12px", flex: 1, textAlign: "center" }}
        >
          {t("PurchaseSummary.Total")}
        </Typography>
      </Box>

      <Box
        sx={{
          maxHeight: "300px",
          overflowY: "auto",
          paddingRight: "10px",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {products.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "none",
              backgroundColor: "transparent",
              padding: "15px 0",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, borderRadius: "12px" }}
              image={product.src}
              alt={product.title}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 17,
                padding: "0 40px",
              }}
            >
              <Typography
                sx={{
                  flex: 2,
                  textAlign: "left",
                  minWidth: "150px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.title}
              </Typography>

              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {product.quantity}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                ${product.price.toFixed(2)}
              </Typography>
              <Typography
                sx={{
                  flex: 1,
                  textAlign: "center",
                  visibility: index === 0 ? "visible" : "hidden",
                }}
              >
                12.30
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
