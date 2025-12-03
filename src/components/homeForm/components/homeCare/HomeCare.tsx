import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { imagen_2, VectorIcono } from "../../../../assets/images";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

export const HomeCare = ({ blog, loading }: any) => {
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

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px 21%",
          width: "1080px",
          height: "430px",
          overflow: "hidden",
        }}
      >
        <img
          src={imagen_2}
          alt="image"
          style={{
            width: "100%",
            height: "auto",
            boxShadow: "1px 0px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Box>

      {/* Contenedor encima de la imagen */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(40, 40, 40, 0.5)",
          backdropFilter: "blur(6px)",
          padding: "25px",
          borderRadius: "16px",
          color: "#FBFFDD",
          width: "30%",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#FBFFDD",
            marginBottom: "18px",
            padding: "6px 8px",
            minWidth: "auto",
            lineHeight: 1,
            color: "rgba(35, 35, 35, 0.96)",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "rgb(172, 180, 154)", // Color en el hover
            },
          }}
        >
          {t("homeform.blog")}
        </Button>
        <Box>
          <Typography
            variant="h3"
            sx={{
              marginRight: "40px",
              fontSize: "1.2rem",
              fontWeight: "500",
              marginBottom: "22px",
            }}
          >
            {currentLang === "es"
              ? blog?.name_spanish || blog?.name_english
              : blog?.name_english || blog?.name_spanish}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "row",
            marginBottom: "40px",
          }}
        >
          <Box
            component="img"
            src={VectorIcono} // Reemplaza esto con la imagen del icono
            alt="icono"
            sx={{
              width: 23, // Ajusta el tamaño del icono
              height: 23,
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ lineHeight: 1 }}>Wholly</Typography>
            <Typography sx={{ lineHeight: 1, marginTop: 1.5 }}>
              {blog?.created_at
                ? new Intl.DateTimeFormat(
                  currentLang === "es" ? "es-ES" : "en-US",
                  { day: "numeric", month: "long", year: "numeric" }
                ).format(new Date(blog.created_at))
                : ""
              }
            </Typography>

          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            marginLeft: "68%", // Mueve el Box al extremo derecho
            "&:hover": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Typography>{t("homeform.learnMore")}</Typography>
          <ChevronRightIcon sx={{ fontSize: 20, color: "#FBFFDD" }} />
        </Box>
      </Box>
    </Box>
  );
};
