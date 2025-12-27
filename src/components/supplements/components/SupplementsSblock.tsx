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

export const SupplementsSblock = ({ supplement }: any) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es móvil
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Detecta si es tablet
  const token = localStorage.getItem("Token");
  const isLogged = Boolean(token);

  const accordionSblock = [
    {
      id: "panel0",
      number: "00",
      title: t("supplementsForm.Description"),
      content:
        currentLang === "es"
          ? supplement?.description_spanish
          : supplement?.description_english,
    },
    {
      id: "panel1",
      number: "01",
      title: t("supplementsForm.Indications"),
      content: supplement?.indications
        ? supplement?.indications
            .map((item: any) => {
              const name =
                currentLang === "es"
                  ? item?.name_spanish?.trim()
                  : item?.name_english?.trim() || item?.name_spanish?.trim();

              const desc =
                currentLang === "es"
                  ? item?.description_spanish?.trim()
                  : item?.description_english?.trim();

              if (!name && !desc) return null;

              return `• <strong>${name}</strong>: ${desc}`;
            })
            .filter(Boolean)
            .join("<br/>")
        : "",
    },
    {
      id: "panel2",
      number: "02",
      title: t("supplementsForm.HowUse"),
      content:
        currentLang === "es"
          ? supplement?.use_spanish
          : supplement?.use_english,
    },
    {
      id: "panel3",
      number: "03",
      title: t("supplementsForm.Precautions"),
      content:
        currentLang === "es"
          ? supplement?.precaution_spanish
          : supplement?.precaution_english,
    },
    {
      id: "panel4",
      number: "04",
      title: t("supplementsForm.Interactions"),
      content: supplement?.interactions
        ? supplement?.interactions
            .map((item: any) => {
              const name =
                currentLang === "es"
                  ? item?.name_spanish?.trim()
                  : item?.name_english?.trim() || item?.name_spanish?.trim();

              const desc =
                currentLang === "es"
                  ? item?.description_spanish?.trim()
                  : item?.description_english?.trim();

              if (!name && !desc) return null;

              return `• <strong>${name}</strong>: ${desc}`;
            })
            .filter(Boolean)
            .join("<br/>")
        : "",
    },
    {
      id: "panel5",
      number: "05",
      title: t("supplementsForm.Contraindications"),
      content: supplement?.contraindications
        ? supplement?.contraindications
            .map((item: any) => {
              const name =
                currentLang === "es"
                  ? item?.name_spanish?.trim()
                  : item?.name_english?.trim() || item?.name_spanish?.trim();

              const desc =
                currentLang === "es"
                  ? item?.description_spanish?.trim()
                  : item?.description_english?.trim();

              if (!name && !desc) return null;

              return `• <strong>${name}</strong>: ${desc}`;
            })
            .filter(Boolean)
            .join("<br/>")
        : "",
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (!supplement) return null;

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
          variant="h3"
          gutterBottom
          sx={{
            fontSize: "1.8rem",
            color: "rgba(31, 31, 31, 0.85)",
            marginTop: isMobile || isTablet ? "20px" : "70px",
            marginBottom: "10px",
            paddingBottom: "15px",
            fontWeight: 400,
            borderBottom: "1px solid #A5AB94",
            width: "100%",
          }}
        >
          {currentLang === "es"
            ? supplement?.name_spanish || supplement?.name_english
            : supplement?.name_english || supplement?.name_spanish}
        </Typography>
        {accordionSblock.map(({ id, number, title, content }) => (
          <Accordion
            key={id}
            disableGutters
            square
            slotProps={{ transition: { unmountOnExit: true } }}
            expanded={expanded === id}
            onChange={handleChange(id)}
            sx={{
              overflow: "hidden",
              marginBottom: "10px",
              paddingBottom: "10px",
              boxShadow: "none",
              backgroundColor: "#E8E4DE",
              borderBottom: id === "panel5" ? "none" : "1px solid #A5AB94",
              borderTop: "0",
              "&:before": { display: "none" },
            }}
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
                sx={{ color: "#3C3C3C", fontSize: "19px" }}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ color: "#3C3C3C" }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
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
                variant="h4"
                sx={{
                  fontWeight: 500,
                  fontSize: "1.3rem",
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
                {supplement?.code}
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
                variant="h4"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  width: "50%",
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
                {supplement?.max_time} Días
              </Typography>
            </Box>
          </Box>

          {/* Compatibility Message */}
          <Box
            sx={{
              backgroundColor: supplement?.is_compatible
                ? "#A5AB94"
                : "#EE6C5A",
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
                marginLeft: "71px",
                color: "#3C3C3C",
              }}
            >
              {isLogged &&
                (supplement?.is_compatible ? (
                  <>{t("supplementsForm.productCompatible")}</>
                ) : (
                  <>{t("supplementsForm.productNotCompatible")}</>
                ))}
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
