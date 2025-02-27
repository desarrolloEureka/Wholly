import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { logo_app } from "../../assets/images";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { IsActiveLangButton } from "./customAppBarTypes";
import { language } from "../../globals/globals";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomAppBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isActiveLangButton, setIsActiveLangButton] =
    useState<IsActiveLangButton>();
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Verifica si la pantalla es pequeña

  const validLanguage = (lang: string) => {
    const langSet: IsActiveLangButton = {
      es: false,
      en: false,
    };

    if (lang === "es") {
      langSet.es = true;
    } else if (lang === "en") {
      langSet.en = true;
    }
    setIsActiveLangButton(langSet);
  };

  const handleLanguageChange = (languageCode: string) => {
    validLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    validLanguage(language.split("-")[0]);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4 ))",
        backdropFilter: "blur(4px)",
        width: "100%",
        height: 90,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Logo siempre visible */}
        <Box
          sx={{
            display: "flex",
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate(`/`)} // Usa la key para la navegación
          >
            <img
              style={{
                width: 100,
                height: 30,
              }}
              src={logo_app}
              alt="logo"
            />
          </Button>
        </Box>

        {/* Contenedor de los botones de navegación y lenguaje (solo en pantallas grandes) */}
        {!isSmallScreen && (
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Mapeo de los botones con texto */}
              {[
                { label: "home", key: "" },
                { label: "category", key: "category" },
                { label: "blog", key: "blog" },
                { label: "support", key: "support" },
                { label: "aboutUs", key: "about_us" },
                { label: "kits", key: "kits" },
              ].map((button, index) => (
                <Button
                  onClick={() => navigate(`/${button.key}`)} // Usa la key para la navegación
                  key={button.label + index}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    "&:hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "7px",
                      color: "#FBFFDD",
                    },
                  }}
                >
                  {t(`customAppBar.${button.label}`)}
                </Button>
              ))}
            </Box>
          </Box>
        )}

        {/* Contenedor de los botones adicionales (solo en pantallas grandes) */}
        {!isSmallScreen && (
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* Botones de idioma */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  sx={{
                    color: "#A5AB94",
                    fontWeight: isActiveLangButton?.en ? "bold" : "100",
                    minWidth: "auto",
                  }}
                  onClick={() => handleLanguageChange("en")}
                >
                  {t("customAppBar.en")}
                </Button>

                <Box
                  sx={{
                    height: "25px",
                    width: "1px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                />

                <Button
                  sx={{
                    color: "#ADADAD",
                    fontWeight: isActiveLangButton?.es ? "bold" : "100",
                    minWidth: "auto",
                  }}
                  onClick={() => handleLanguageChange("es")}
                >
                  {t("customAppBar.es")}
                </Button>
              </Stack>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{
                margin: "10px",
                color: "rgba(12, 12, 12, 0.57)",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "50%",
                padding: "10px",
                minWidth: "auto",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                width: 44,
              }}
            >
              <ShoppingBagOutlinedIcon />
            </Button>

            {/* Botón Login */}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/login")}
              style={{
                margin: "10px",
                backgroundColor: "transparent",
                border: "1px solid #A5AB95",
                color: "#FBFFDD",
                borderRadius: "7px",
                padding: "5px 12px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textTransform: "none",
                flexGrow: 1,
                width: 130,
              }}
            >
              {t("customAppBar.nameLogin")}
            </Button>

            {/* Botón Registro */}
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/register")}
              style={{
                margin: "10px",
                color: "#383838",
                backgroundColor: "#EEF1F1",
                borderRadius: "7px",
                padding: "6px 12px",
                flexGrow: 1,
                textTransform: "none",
                width: 130,
              }}
            >
              {t("customAppBar.nameRecord")}
            </Button>
          </Box>
        )}

        {/* Menú hamburguesa solo en pantallas pequeñas */}
        {isSmallScreen && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
