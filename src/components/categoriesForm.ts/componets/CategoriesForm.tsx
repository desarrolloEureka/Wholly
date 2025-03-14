import { Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  rectangle1,
  rectangle3,
  rectangle4,
  rectangle5,
  rectangle6,
  rectangle7,
} from "../../../assets/images";
import { ImagesCategories } from "../../../globals/types";

const backgroundColors = ["#EEF1F0", "#A5AB94", "#E8E4DF"];
const textColors = ["#3C3C3C", "#FBFFDD", "#3C3C3C"];

export const CategoriesForm = () => {
  const imagesAreas: ImagesCategories[] = [
    {
      id: 1,
      src: rectangle1,
      title: "Anti-aging",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW1",
    },
    {
      id: 2,
      src: rectangle4,
      title: "Skin care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW2",
    },
    {
      id: 3,
      src: rectangle3,
      title: "Face care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW3",
    },
    {
      id: 4,
      src: rectangle5,
      title: "Anti-aging",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW4",
    },
    {
      id: 5,
      src: rectangle7,
      title: "Skin care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW5",
    },
    {
      id: 6,
      src: rectangle6,
      title: "Face care",
      subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      description: "SHOP NOW6",
    },
  ];

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
      {imagesAreas.map((item, index) => {
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
            }}
          >
            <img
              src={item.src}
              alt={item.title}
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
                variant="body1"
                sx={{
                  fontSize: "1.4rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.2rem",
                  fontFamily: "Montserrat, sans-serif",
                  marginTop: "4px",
                  color: textColor,
                  marginBottom: "28px",
                }}
              >
                {item.subtitle}
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
                {item.description}
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
