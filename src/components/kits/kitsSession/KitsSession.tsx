import { Box, Button, Typography, IconButton, Paper } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  InfoOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// types
import { KitSessionProps } from "./types";

export const KitsSession = ({
  kit,
  references,
  setCurrentReference,
}: KitSessionProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = references.results ?? [];
  const total = items.length;
  const selectedProduct = (references.results ?? [])[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? total - 1 : prev - 1;
      const newReferenceId = items[newIndex]?.reference_id ?? null;

      setCurrentReference(newReferenceId);

      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === total - 1 ? 0 : prev + 1;
      const newReferenceId = items[newIndex]?.reference_id ?? null;

      setCurrentReference(newReferenceId);

      return newIndex;
    });
  };

  useEffect(() => {
    if (items.length > 0) {
      setCurrentReference(items[0].reference_id);
    }
  }, [items, setCurrentReference]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          padding: 4,
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: "#fff",
          gap: 20,
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
              left: -60,
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
            src={selectedProduct.image}
            alt={selectedProduct.reference_id.toString()}
            sx={{
              width: 400,
              height: 400,
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
              right: -60,
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
            {currentLang === "es" ? kit.name_spanish : kit.name_english}
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontSize: "1.2rem", color: "#555", mb: 2 }}
          >
            {currentLang === "es"
              ? kit.description_spanish
              : kit.description_english}
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", mb: 1 }}>
            {`$${kit.value}`}
          </Typography>

          {/* <Typography sx={{ color: "#aaa", mb: 3 }}>
            10 units in stock
          </Typography> */}

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
