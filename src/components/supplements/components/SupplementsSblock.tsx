import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

export const SupplementsSblock = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es móvil
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Detecta si es tablet

  const accordionSblock = [
    {
      id: "panel0",
      number: "00",
      title: t("supplementsForm.Description"),
      content: t("supplementsForm.Lorem"),
    },
    {
      id: "panel1",
      number: "01",
      title: t("supplementsForm.Indications"),
      content: t("supplementsForm.Lorem1 "),
    },
    {
      id: "panel2",
      number: "02",
      title: t("supplementsForm.HowUse"),
      content: t("supplementsForm.Lorem2 "),
    },
    {
      id: "panel3",
      number: "03",
      title: t("supplementsForm.Precautions"),
      content: t("supplementsForm.Lorem3 "),
    },
    {
      id: "panel4",
      number: "04",
      title: t("supplementsForm.Interactions"),
      content: t("supplementsForm.Lorem4 "),
    },
    {
      id: "panel5",
      number: "05",
      title: t("supplementsForm.Contraindications"),
      content: t("supplementsForm.Lorem5 "),
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile || isTablet ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        width: "100%",
        height: "auto",
        gap: isMobile || isTablet ? "15px" : "5%",
      }}
    >
      {/* Sección de los Acordeones */}
      <Box
        sx={{
          width: isMobile || isTablet || isTablet ? "90%" : "45%",
          marginBottom: "3%",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "rgba(31, 31, 31, 0.85)",
            marginTop: isMobile || isTablet ? "20px" : "70px",
            marginBottom: "10px",
            paddingBottom: "15px",
            fontWeight: 400,
            borderBottom: "1px solid #A5AB94",
            width: "100%",
          }}
        >
          {t("supplementsForm.SunBlock")}
        </Typography>
        {accordionSblock.map(({ id, number, title, content }) => (
          <Accordion
            sx={{
              overflow: "hidden",
              marginBottom: "10px",
              paddingBottom: "10px",
              boxShadow: "none",
              backgroundColor: "#E8E4DE",
              borderBottom: id === "panel5" ? "none" : "1px solid #A5AB94",
              borderTop: "0",
              "&:before": { display: "none" },
              width: "100%",
            }}
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={
                <AddIcon
                  sx={{ fontSize: "20px", color: "rgba(19, 19, 19, 0.82)" }}
                />
              }
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  marginRight: "10px",
                  minWidth: "30px",
                  color: "#3C3C3C",
                }}
              >
                {number}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.0rem" }}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#3C3C3C" }}>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Sección de Información */}
      <Box
        sx={{
          width: isMobile || isTablet ? "90%" : "45%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "10px",
            width: isMobile || isTablet ? "100%" : "480px",
            height: isMobile || isTablet ? "auto" : "280px",
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.35)",
            marginTop: isMobile || isTablet ? "0" : "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "335px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {/* Reference Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  color: "#3C3C3C",
                }}
              >
                {t("supplementsForm.Reference")}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#EEF1F0",
                  borderRadius: "8px",
                  padding: "5px 12px",
                  minWidth: "80px",
                  textAlign: "center",
                  fontSize: "1.0rem",
                  color: "#3C3C3C",
                  fontWeight: 400,
                }}
              >
                0.7 oz/20 ml
              </Typography>
            </Box>

            {/* Recommended Application Time Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  width: "44%",
                  textAlign: "left",
                  color: "#3C3C3C",
                }}
              >
                {t("supplementsForm.RecommendedTime")}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#EEF1F0",
                  borderRadius: "8px",
                  padding: "5px 26px",
                  minWidth: "80px",
                  textAlign: "center",
                  fontSize: "1.0rem",
                  color: "#3C3C3C",
                  fontWeight: 400,
                }}
              >
                {t("supplementsForm.months")}
              </Typography>
            </Box>
          </Box>

          {/* Compatibility Message */}
          <Box
            sx={{
              backgroundColor: "#A5AB94",
              width: "76%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Asegura que el contenido esté arriba
              paddingBottom: "2px", // Ajusta según sea necesario
              marginTop: "30px",
            }}
          >
            <Typography
              sx={{
                width: "80%",
                backgroundColor: "#ffff",
                marginLeft: "80px",
                color: "#3C3C3C",
              }}
            >
              {t("supplementsForm.productCompatible")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end", // 👈 Esto alinea el botón a la derecha
              width: "100%", // Opcional, para ocupar todo el contenedor
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#a5ab94",
                borderRadius: 1,
                boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
                paddingX: 4,
                marginTop: "10px",
                textTransform: "none",
                fontWeight: 600,
                height: "35px",
                marginRight: "50px",
                width: "105px",
              }}
            >
              {t("supplementsForm.Register")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
