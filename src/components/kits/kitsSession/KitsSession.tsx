import { Box, Button, Typography, IconButton, Paper } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  InfoOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../assets/images";

export const KitsSession = () => {
  const { t } = useTranslation();

  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: t("supplementsForm.SunBlock1"),
      subtitle: t("supplementsForm.subtitle1"),
      description: "$27.00",
      rating: 4,
    },
    {
      id: 2,
      src: Session_2,
      title: t("supplementsForm.SunBlock2"),
      subtitle: t("supplementsForm.subtitle2"),
      description: "$22.00",
      rating: 4.5,
    },
    {
      id: 3,
      src: variety2,
      title: t("supplementsForm.SunBlock3"),
      subtitle: t("supplementsForm.subtitle3"),
      description: "$19.99",
      rating: 3.5,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const selectedProduct = products[currentIndex];

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          padding: 4,
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: "#fff",
          paddingLeft: { xs: 4, md: 9, lg: 4 },
          paddingRight: { xs: 4, md: 4, lg: 4 },
          paddingTop: { xs: 4, md: 4, lg: 4 },
          paddingBottom: { xs: 4, md: 4, lg: 4 },
          gap: { xs: 10, md: 20 },
        }}
      >
        {/* Imagen a la derecha */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 400,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -20, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgb(212, 216, 192)",
              "&:hover": {
                backgroundColor: "#A5AB94",
              },
              zIndex: 1,
              color: "white",
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <Box
            component="img"
            src={selectedProduct.src}
            alt={selectedProduct.title}
            sx={{
              width: { xs: 280, md: 400 },
              height: { xs: 280, md: 400 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f5f1ed",
            }}
          />

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -20, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgb(212, 216, 192)",
              "&:hover": { backgroundColor: "#A5AB94" },
              zIndex: 1,
              color: "white",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Contenido a la izquierda */}
        <Box sx={{ minWidth: "300px", flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "2.1rem", fontWeight: 600, mb: 2 }}
          >
            {selectedProduct.title}
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontSize: "1.2rem", color: "#555", mb: 2 }}
          >
            {selectedProduct.subtitle}
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", mb: 1 }}>
            {selectedProduct.description}
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 3 }}>
            10 units in stock
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#a5ab94",
              borderRadius: 8,
              boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
              paddingX: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Add to basket
          </Button>

          <Box
            sx={{ mt: 4, display: "flex", alignItems: "flex-start", gap: 1 }}
          >
            <InfoOutlined sx={{ color: "#a5ab94" }} />
            <Typography sx={{ color: "#444", fontSize: "0.9rem" }}>
              When changing the image, the data of that supplement that is part
              of the kit will be reflected at the bottom
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
