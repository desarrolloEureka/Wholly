import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SupplementsIngredients = () => {
  const { t } = useTranslation();

  const references = [
    {
      id: "1B",
      content: t(
        "1 TW. Medications & Mothers' Milk. 1991- . Springer Publishing Company. Available from https://www.halesmeds.comConsultado el 10 de Abril de 2024TEXTO COMPLETO (ENLACE A FUENTE ORIGINAL)"
      ),
    },
  ];

  const accordionData = [
    {
      id: "panel1",
      title: t("supplementsForm.Ciprofibrato"),
      content: t("supplementsForm.LoremIpsum1"),
    },
    {
      id: "panel2",
      title: t("supplementsForm.Levemir"),
      content: t("supplementsForm.LoremIpsum1"),
    },
    {
      id: "panel3",
      title: t("supplementsForm.Locusim"),
      content: t("supplementsForm.LoremIpsum2"),
    },
    {
      id: "panel4",
      title: t("supplementsForm.Ultrasomes"),
      content: t("supplementsForm.LoremIpsum3"),
    },
    {
      id: "panel5",
      title: t("supplementsForm.Epidermosil"),
      content: t("supplementsForm.LoremIpsum4"),
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);
  const [expanded1, setExpanded1] = useState<string | false>(false);

  // Maneja los acordeones de la primera sección
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Maneja los acordeones de la segunda sección (independiente)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        maxWidth: "94%",
        width: "100%",
        height: "auto",
        gap: "5%",
      }}
    >
      {/* Sección de los Acordeones */}
      <Box
        sx={{
          width: "45%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#A5AB94",
            paddingBottom: "5px",
            borderBottom: "1px solid #A5AB94",
            marginBottom: "10px",
            width: "90%",
          }}
        >
          {t("supplementsForm.Main_ingredients")}
        </Typography>
        {accordionData.map(({ id, title, content }) => (
          <Accordion
            sx={{
              overflow: "hidden",
              marginBottom: "8px",
              boxShadow: "none",
              paddingBottom: "8px",
              borderBottom: "1px solid #A5AB94",
              "&:before": { display: "none" },
              width: "90%",
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
          width: "45%",
        }}
      >
        <Box sx={{ borderBottom: "1px solid #A5AB94" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#A5AB94",
            }}
          >
            {t("supplementsForm.Excipient_Ingredients")}
          </Typography>
        </Box>
        <Typography
          paragraph
          sx={{
            marginTop: "15px",
            width: "84%",
            color: "#3C3C3C",
          }}
        >
          {t("supplementsForm.LoremTex")}
        </Typography>
        <Box sx={{ borderBottom: "1px solid #A5AB94" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#A5AB94",
              marginTop: "55px",
            }}
          >
            {t("supplementsForm.Bibliography")}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: "500",
            marginTop: "15px",
            color: "#3C3C3C",
            borderBottom: "1px solid rgba(60, 60, 60, 0.55)",
            display: "inline-block",
            cursor: "pointer",
            marginBottom: "25px",
          }}
          onClick={() => setExpanded1((prev) => (prev ? false : "1B"))}
        >
          {expanded1
            ? t("supplementsForm.Close_list")
            : t("supplementsForm.List")}
        </Typography>

        {/* Muestra los acordeones solo cuando expanded es true */}
        {expanded1 &&
          references.map(({ id, content }) => (
            <Accordion
              key={id}
              sx={{
                overflow: "hidden",
                marginBottom: "8px",
                boxShadow: "none",
                paddingBottom: "8px",
                borderTop: "1px solid #A5AB94",
                "&:before": { display: "none" },
                width: "90%",
              }}
            >
              <AccordionDetails>
                <Typography sx={{ color: "#3C3C3C" }}>{content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  );
};
