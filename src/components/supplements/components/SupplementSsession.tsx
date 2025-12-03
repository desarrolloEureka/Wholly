import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../globals/config/config";
import { variety1 } from "../../../assets/images";

export const SupplementSession = ({ supplement }: any) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const images = supplement?.images || [];
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images.length) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!supplement) return null;

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
        <Box sx={{ width: "8%", display: "flex", flexDirection: "column", gap: 2 }}
        >
          {images.map((img: string, index: number) => (
            <Paper
              key={index}
              onClick={() => setSelectedImage(img)}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow:
                  selectedImage === img
                    ? "-3px 3px 6px rgba(0, 0, 0, 0.8)"
                    : "0px 4px 4px rgba(0, 0, 0, 0.58)",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={ConfigConstants.webServiceName + img}
                alt={`img-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
            src={selectedImage ? ConfigConstants.webServiceName + selectedImage : variety1}
            alt="selected"
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
              {currentLang === "es"
                ? supplement?.name_spanish || supplement?.name_english
                : supplement?.name_english || supplement?.name_spanish}
            </Typography>


            {/* <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", color: "gray", marginBottom: "30px" }}
            >
              {selectedProduct.subtitle}
            </Typography> */}
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
              {(
                currentLang === "es"
                  ? supplement.description_spanish || supplement.description_english
                  : supplement.description_english || supplement.description_spanish
              )?.substring(0, 100) + "..."}
            </Typography>

            <Typography
              color="primary"
              sx={{ fontSize: "1.8rem", marginTop: "10px" }}
            >
              {/*  {supplement?.reference?.price_total || 0} */}
              ${supplement?.amount?.toLocaleString("es-CO") ?? "—"}
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
              {supplement?.amount} units in stock
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
      <Typography sx={{ marginLeft: "50px" }}>See all - {images.length || 0}</Typography>
    </Box>
  );
};
