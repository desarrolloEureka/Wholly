import { Box, Button, Divider, styled, Typography } from "@mui/material";
import {
  facebook_Footer,
  instagram_Footer,
  linkedIn_Footer,
  logo_app,
  twitter_Footer,
  youTube_Footer,
} from "../../assets/images";
import { useTranslation } from "react-i18next";

const FooterApp = () => {
  const { t } = useTranslation();
  const InteractiveTextFooter = styled("span")({
    cursor: "pointer",
    color: "#ffff",
    textDecoration: "underline",
    textDecorationColor: "#ffff",
    "&:hover": {
      color: "#FBFFDD",
      textDecorationColor: "#FBFFDD",
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#3C3C3C",
        color: "white",
        padding: "0% 0",
        flexWrap: "wrap", // Permfite que los elementos se ajusten en pantallas pequeñas
      }}
    >
      <Box
        className="footerBox"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={6}
        sx={{
          textDecoration: "underline",
          fontSize: "0.845rem",
          flexWrap: "wrap", // Permite que los elementos se ajusten en pantallas pequeñas
        }}
      >
        {[
          [
            t("footerApp.compatibleProducts"),
            t("footerApp.blockers"),
            t("footerApp.skinCare"),
          ],
          [
            t("footerApp.antiAging"),
            t("footerApp.offersBlog"),
            t("footerApp.aboutWholly"),
          ],
          [
            t("footerApp.blogSample"),
            t("footerApp.blogLorem"),
            t("footerApp.blogNaturalProducts"),
          ],
          [
            t("footerApp.blogSisterFirer"),
            t("footerApp.support"),
            t("footerApp.myOrders"),
          ],
          [
            t("footerApp.BlogIpsumlorem"),
            t("footerApp.variety"),
            t("footerApp.whollyMission"),
          ],
          [
            t("footerApp.myPaymentMethods"),
            t("footerApp.myAddresses"),
            t("footerApp.myClinicalHistory"),
          ],
        ].map((column, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            gap={4} // Ajusta el espacio entre los elementos
            className="footerColumn"
            sx={{
              // Alinea verticalmente  alignItems: "center",
              flex: 1, // Asegura que cada columna ocupe un espacio proporcional
              minWidth: "200px", // Añade un tamaño mínimo para evitar que los elementos se aplasten en pantallas pequeñas
            }}
          >
            {column.map((item, itemIndex) => (
              <Box key={item + itemIndex} sx={{ textAlign: "start" }}>
                {item}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Divider sx={{ width: "100%", borderColor: "white" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Contenedor principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginTop: "32px",
            marginBottom: "32px",
            flexWrap: "wrap",

            "@media (max-width: 768px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          {/* Contenedor del logo (móvil: arriba) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flex: 1,

              "@media (max-width: 768px)": {
                justifyContent: "center",
                order: -1, // Se mueve arriba en móvil
                marginBottom: "16px",
              },
            }}
          >
            <Button color="inherit">
              <img
                style={{
                  width: 78,
                  height: 25,
                }}
                src={logo_app}
                alt="logo"
              />
            </Button>
          </Box>

          {/* Contenedor de botones principales (móvil: en el medio) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flex: 2,
              flexWrap: "wrap",
              justifyContent: "space-evenly",

              "@media (max-width: 768px)": {
                justifyContent: "center",
                flexDirection: "column",
                gap: 1.5,
              },
            }}
          >
            {[
              t("footerApp.category"),
              t("footerApp.blog"),
              t("footerApp.Support"),
              t("footerApp.about_us"),
              t("footerApp.kits"),
            ].map((text, index) => (
              <Button
                key={index}
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
                {text}
              </Button>
            ))}
          </Box>

          {/* Contenedor de redes sociales (móvil: abajo) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "center",

              "@media (max-width: 768px)": {
                order: 1, // Se mueve abajo en móvil
                marginTop: "16px",
              },
            }}
          >
            {[
              { src: facebook_Footer, alt: "facebook" },
              { src: twitter_Footer, alt: "twitter" },
              { src: instagram_Footer, alt: "instagram" },
              { src: linkedIn_Footer, alt: "linkedIn" },
              { src: youTube_Footer, alt: "youtube" },
            ].map((icon, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{
                  minWidth: 0,
                  padding: 0,
                  width: 25,
                  height: 25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  src={icon.src}
                  alt={icon.alt}
                />
              </Button>
            ))}
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Divider sx={{ width: "100%", borderColor: "white" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            my: 2,
            marginBottom: 3,
            textAlign: "center", // Asegura que el texto dentro esté centrado
            width: "100%", // Ocupa todo el ancho del contenedor
          }}
          variant="body2"
        >
          {t("footerApp.copyright")}
          <InteractiveTextFooter>
            {t("footerApp.termsAndConditions")}
          </InteractiveTextFooter>
          <span style={{ color: "#ccc", marginLeft: 3, marginRight: 3 }}></span>
          <InteractiveTextFooter>
            {t("footerApp.privacyPolicy")}
          </InteractiveTextFooter>
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterApp;
