import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { VectorIcono } from "../../../assets/images";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

export const BlogContainer = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="end"
        m={2}
        mr="100px"
        mt="40px"
      >
        <TextField
          size="small"
          placeholder={t("blogForm.SearchArticles")}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            height: "40px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: "40px",
              border: "1px solid #A5AB94",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    borderRadius: "5px",
                    padding: "4px 12px",
                    fontSize: "0.8rem",
                    width: "10px",
                    backgroundColor: "#A5AB94",
                  }}
                >
                  {t("blogForm.SearchButton")}
                </Button>
              </InputAdornment>
            ),
          }}
        />
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
          width: "35%",
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
          {t("blogForm.blog")}
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
            {t("blogForm.bestCare")}
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
            <Typography sx={{ lineHeight: 1 }}>{t("blogForm.date")}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            marginLeft: "73%", // Mueve el Box al extremo derecho
            "&:hover": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Typography variant="h6">{t("blogForm.learnMore")}</Typography>
          <ChevronRightIcon sx={{ fontSize: 20, color: "#FBFFDD" }} />
        </Box>
      </Box>
    </Box>
  );
};
