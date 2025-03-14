import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import { variety1, variety2, variety3 } from "./../../../assets/images";
import { ImagesVariety } from "../../../globals/types";

export const InternalCategoriestyform = () => {
  const imagesAreas: ImagesVariety[] = [
    {
      id: 1,
      src: variety1,
      title: t("homeform.titleVariety1"),
      subtitle: t("homeform.subtitleVariety1"),
      description: t("homeform.priceVariety1"),
    },
    {
      id: 2,
      src: variety2,
      title: t("homeform.titleVariety2"),
      subtitle: t("homeform.subtitleVariety2"),
      description: t("homeform.priceVariety2"),
    },
    {
      id: 3,
      src: variety3,
      title: t("homeform.titleVariety3"),
      subtitle: t("homeform.subtitleVariety3"),
      description: t("homeform.priceVariety3"),
    },
    {
      id: 4,
      src: variety1,
      title: t("homeform.titleVariety1"),
      subtitle: t("homeform.subtitleVariety1"),
      description: t("homeform.priceVariety1"),
    },
    {
      id: 5,
      src: variety2,
      title: t("homeform.titleVariety2"),
      subtitle: t("homeform.subtitleVariety2"),
      description: t("homeform.priceVariety2"),
    },
    {
      id: 6,
      src: variety3,
      title: t("homeform.titleVariety3"),
      subtitle: t("homeform.subtitleVariety3"),
      description: t("homeform.priceVariety3"),
    },
  ];

  const backgroundColor = "#EEF1F0";
  const textColor = "#3C3C3C";

  return (
    <Box
      sx={{
        marginBottom: "50px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "150px",
            width: "100%", // Se ajusta el tamaño
            maxWidth: "1450px", // Se limita el ancho máximo
            margin: "0 auto", // Centrado automático
            paddingX: "70px", // Márgenes uniformes en los lados
          }}
        >
          {imagesAreas.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
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
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: backgroundColor,
                  padding: "10px 15px",

                  textAlign: "start",
                  border: "1px solid rgba(0, 0, 0, 0.85)",
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: textColor,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    marginTop: "3px",
                    color: textColor,
                    marginBottom: "8px",
                  }}
                >
                  {item.subtitle}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    width: "50%",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "85px",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "10px",
            marginRight: "30px",
            color: "#3C3C3C",
          }}
        >
          1-60 of 1921 results
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "50px",
            height: "45px",
            color: "#000",
            border: "2px solid #000",
            "&:hover": { backgroundColor: "#0056b3", color: "#fff" },
          }}
        >
          show more products
        </Button>
      </Box>
    </Box>
  );
};
