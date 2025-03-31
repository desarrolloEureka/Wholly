import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { variety1, variety2 } from "../../../assets/images";
import { ImagesVariety } from "../../../globals/types";
import { useTranslation } from "react-i18next";

export const VarietyBlog = () => {
  const { t } = useTranslation();

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
  ];

  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          paddingTop: "55px",
          borderTop: "2px solid rgba(180, 180, 180, 0.89)", // Línea superior
          margin: "0 auto",
          marginBottom: "70px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            paddingTop: "10px", // Espacio entre la línea y el texto
            color: "#A5AB94",
          }}
        >
          {t("blogForm.products_help")}
        </Typography>
      </Box>

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
              width: "100%",
              maxWidth: "1450px",
              margin: "0 auto",
              paddingX: "70px",
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
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Supplements")}
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
                    border: "1px solid rgba(60, 60, 60, 0.64)",
                    borderTop: "none",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      marginTop: "10px",
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
      </Box>
    </Box>
  );
};
