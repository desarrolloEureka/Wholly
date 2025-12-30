import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../globals/config/config";
import { variety1 } from "../../../assets/images";

export const SupplementSession = ({ supplement }: any) => {
  const { i18n } = useTranslation();
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
        <Box
          sx={{
            minWidth: "109px",
            height: "400px",
            maxHeight: "400px",
            overflowY: "auto",
            display: "flex",
            gap: 2,
            flexDirection: "column",

            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { width: 0 },
          }}
        >
          {images.map((img: string, index: number) => (
            <Box
              key={`reference-result-${index}`}
              component="img"
              src={ConfigConstants.webServiceName + img}
              alt={`img-${index}`}
              sx={{
                width: 109,
                height: 109,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
                border: selectedImage === img ? 2 : 1,
                borderColor: "black",
                backgroundColor: "#f5f1ed",
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(img)}
            />
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
            src={
              selectedImage
                ? ConfigConstants.webServiceName + selectedImage
                : variety1
            }
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
                ? supplement.name_spanish
                : supplement.name_english}
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
              sx={{ fontSize: "1.2rem", marginTop: "10px" }}
            >
              {currentLang === "es"
                ? supplement.description_spanish
                : supplement.description_english}
            </Typography>

            <Typography
              color="primary"
              sx={{ fontSize: "1.8rem", marginTop: "10px" }}
            >
              {`$${supplement.amount}`}
            </Typography>

            {/* <span
              style={{
                opacity: 0.6,
                marginLeft: "7px",
                marginBottom: "11px",
                fontSize: "1.2rem",

                marginTop: "11px",
              }}
            >
              {supplement?.amount} units in stock
            </span> */}

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: "35px",
                backgroundColor: "#A5AB94",
                borderRadius: "40px",
                height: "38px",
                width: "40%",
              }}
            >
              Add to basket
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Typography sx={{ marginLeft: "50px" }}>
        See all - {images.length || 0}
      </Typography> */}
    </Box>
  );
};
