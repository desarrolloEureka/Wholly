import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export const SupplementSession = () => {
  const { t } = useTranslation();

  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: t("supplementsForm.SunBlock1"),
      subtitle: t("supplementsForm.subtitle1"),
      description: "$10.99",
      rating: 3.5,
    },
    {
      id: 2,
      src: Session_2,
      title: t("supplementsForm.SunBlock2"),
      subtitle: t("supplementsForm.subtitle2"),
      description: "$15.99",
      rating: 4.0,
    },
    {
      id: 3,
      src: Session_1,
      title: t("supplementsForm.SunBlock3"),
      subtitle: t("supplementsForm.subtitle3"),
      description: "$20.99",
      rating: 4.5,
    },
    {
      id: 4,
      src: variety2,
      title: t("supplementsForm.SunBlock4"),
      subtitle: t("supplementsForm.subtitle4"),
      description: "$19.99",
      rating: 4.5,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          marginLeft: "30px",
          marginTop: "50px",
        }}
      >
        {/* Lista de imágenes a la izquierda */}
        <Box
          sx={{ width: "8%", display: "flex", flexDirection: "column", gap: 2 }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow:
                  selectedProduct.id === product.id
                    ? "-3px 3px 6px rgba(0, 0, 0, 0.8)"
                    : "0px 4px 4px rgba(0, 0, 0, 0.58)",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.src}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* Producto seleccionado a la derecha */}
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
            marginLeft: "20px",
          }}
        >
          <img
            src={selectedProduct.src}
            alt={selectedProduct.title}
            style={{
              width: 450,
              height: 450,
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "-3px 6px 5px rgba(0, 0, 0, 0.56)",
            }}
          />

          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "28px",
              marginLeft: "10%",
              width: "50%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#3C3C3C",
                marginBottom: "35px",
              }}
            >
              {selectedProduct.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", color: "gray", marginBottom: "30px" }}
            >
              {selectedProduct.subtitle}
            </Typography>
            {/*<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 300, color: "#A5AB94" }}
              >
                {selectedProduct.rating.toFixed(1)}
              </Typography>
              <Rating
                name="product-rating"
                value={selectedProduct.rating}
                precision={0.5}
                readOnly
                size="large"
                sx={{ color: "#A5AB94" }}
              />
            </Box>
            */}
            <Typography
              color="primary"
              sx={{ fontSize: "1.8rem", marginTop: "10px" }}
            >
              {selectedProduct.description}
            </Typography>
            <span
              style={{
                opacity: 0.6,
                marginLeft: "7px",
                marginBottom: "11px",
                fontSize: "1.2rem",

                marginTop: "11px",
              }}
            >
              10 units in stock
            </span>

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: "35px",
                backgroundColor: "#A5AB94",
                borderRadius: "40px",
                height: "38px",
                width: "28%",
              }}
            >
              Add to basket
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ marginLeft: "50px" }}>See all - 12</Typography>
    </Box>
  );
};
