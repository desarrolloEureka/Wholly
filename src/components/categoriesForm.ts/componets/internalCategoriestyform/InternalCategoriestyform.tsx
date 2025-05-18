import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { variety1, variety2, variety3 } from "../../../../assets/images";
import { ImagesVariety } from "../../../../globals/types";
import { useTranslation } from "react-i18next";

export const InternalCategoriestyform = () => {
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

  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";
  const navigate = useNavigate();

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
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", // 2 columnas en móviles
              sm: "repeat(3, 1fr)", // 2 columnas en pantallas medianas en adelante
            },
            gap: { xs: "15px", sm: "30px", md: "120px" },
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
            paddingX: { xs: "10px", sm: "70px" },
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
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: "170px", md: "300px", sm: "230px" },
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: backgroundColor,
                  padding: { xs: "10px 12px", sm: "10px 15px" },
                  height: { xs: "178px", md: "210px", sm: "210px" },

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
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    fontWeight: "bold",
                    color: textColor,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
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
          alignItems: { xs: "center", sm: "flex-end" },
          marginTop: "30px",
          margin: { xs: "0 auto" },
          paddingRight: { xs: "0", sm: "85px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            paddingBottom: "10px",
            marginRight: { xs: "0", sm: "30px" },
            marginTop: { xs: "10px", sm: "10px" },
            color: "#3C3C3C",
          }}
        >
          1-60 of 1921 Results
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "50px",
            height: "45px",
            color: "#000",
            border: "2px solid #000",
            "&:hover": { backgroundColor: "#A5AB94", color: "#fff" },
          }}
        >
          {t("categoriesIternal.showProducts")}
        </Button>
      </Box>
    </Box>
  );
};
