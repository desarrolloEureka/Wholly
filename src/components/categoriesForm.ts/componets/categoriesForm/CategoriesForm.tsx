import { Typography, Box, CircularProgress } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useNavigate } from "react-router-dom";
import {
  rectangle1,
  rectangle4,
  rectangle3,
  rectangle5,
  rectangle7,
  rectangle6,
} from "../../../../assets/images";
import { ImagesCategories } from "../../../../globals/types";
import { ConfigConstants } from "../../../../globals/config/config";
import { useTranslation } from "react-i18next";

const backgroundColors = ["#EEF1F0", "#A5AB94", "#E8E4DF"];
const textColors = ["#3C3C3C", "#FBFFDD", "#3C3C3C"];

export const CategoriesForm = ({ categories, loading }: any) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  if (!categories || categories.length === 0) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>No hay Categorias disponibles.</div>;
  }

  const defaultImages: ImagesCategories[] = [
    {
      id: 1,
      src: rectangle1,
      title: "Anti-aging",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 2,
      src: rectangle4,
      title: "Skin care",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 3,
      src: rectangle3,
      title: "Face care",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 4,
      src: rectangle5,
      title: "Anti-aging",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 5,
      src: rectangle7,
      title: "Skin care",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 6,
      src: rectangle6,
      title: "Face care",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
  ];

  const formattedCategories: ImagesCategories[] =
    categories.length > 0
      ? categories.map((item: any, index: number) => ({
        id: item.id || index,
        src: item.image
          ? `${ConfigConstants.webServiceName}${item.image}`
          : rectangle1,
        title:
          currentLang === "es"
            ? item.name_spanish || item.name_english
            : item.name_english || item.name_spanish,
        description:
          currentLang === "es"
            ? item.description_spanish || item.description_english
            : item.description_english || item.description_spanish,
      }))
      : defaultImages;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Dos columnas
        gap: 2,
        padding: "50px",
        justifyItems: "center",
      }}
    >
      {formattedCategories.map((item, index) => {
        const backgroundColor =
          backgroundColors[index % backgroundColors.length];
        const textColor = textColors[index % textColors.length];

        return (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
              borderRadius: "10px",
              marginBottom: "20px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/InternalCategoriesty/${item.id}`)}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                borderRadius: "10px 10px 0 0",
              }}
            />

            {/* Contenedor del título y subtítulo */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: backgroundColor,
                padding: "15px 20px",
                textAlign: "start",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  color: textColor,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  marginTop: "4px",
                  color: textColor,
                  marginBottom: "28px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </Typography>

              {/* Texto interactivo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-in-out",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: textColor,
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                {t("homeform.ShopNow")}
                <ChevronRightIcon
                  sx={{
                    fontSize: 20,
                    color: textColor,
                    position: "relative",
                    top: "-2.5px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
