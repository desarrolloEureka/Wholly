import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { imagen_2, VectorIcono } from "../../../../assets/images";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

export const HomeCare = () => {
  const { t } = useTranslation();
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
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { sm: "0px", md: "30px" },
          marginTop: { sm: "0px", md: "30px" },
          width: { sm: "100%", md: "54%" },
          height: { sm: "400px", md: "318px" }, // Ajusta la altura según necesites
          boxShadow: "1px 0px 15px rgba(0, 0, 0, 0.5)",
          backgroundImage: {
            xs: "none",
            sm: `url(${imagen_2})`,
          },
          backgroundSize: {
            xs: "initial",
            sm: "cover",
            md: "800px",
          },
          backgroundPosition: {
            xs: "initial",
            sm: "center",
          },
          backgroundRepeat: {
            xs: "initial",
            sm: "no-repeat",
          },
        }}
      >
        {/* Contenido encima de la imagen (si quieres) */}
      </Box>

      {/* Contenedor encima de la imagen */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(40, 40, 40, 0.5)",
          backdropFilter: "blur(6px)",
          padding: "25px",
          borderRadius: "16px",
          color: "#FBFFDD",
          width: { sm: "60%", md: "30%" },
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
            {t("homeform.bestCare")}
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
            <Typography sx={{ lineHeight: 1 }}>{t("homeform.date")}</Typography>
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
