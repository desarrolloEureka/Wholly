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

export const SupplementsIngredients = ({ supplement }: any) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const accordionData = supplement?.main_ingredients?.map((item: any) => {
    const title =
      currentLang === "es"
        ? item.main_ingredient
        : item.main_ingredient_english || item.main_ingredient;

    const content =
      currentLang === "es"
        ? item.description_spanish
        : item.description_english;

    return {
      id: `main-${item.id}`,
      title,
      content,
    };
  });

  const excipientsText = supplement?.excipients
    ?.map((item: any) => {
      const name =
        currentLang === "es"
          ? item.name_spanish
          : item.name_english || item.name_spanish;

      const desc =
        currentLang === "es"
          ? item.description_spanish
          : item.description_english;

      return `• <strong>${name}</strong>: ${desc}`;
    })
    .join("<br/>");

  const [expanded, setExpanded] = useState<string | false>(false);
  const [expanded1, setExpanded1] = useState<string | false>(false);

  // Maneja los acordeones de la primera sección
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Maneja los acordeones de la segunda sección (independiente)

  if (!supplement) return null;

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
          variant="h3"
          gutterBottom
          sx={{
            fontSize: "1.8rem",
            color: "#A5AB94",
            paddingBottom: "5px",
            borderBottom: "1px solid #A5AB94",
            marginBottom: "10px",
            width: "90%",
          }}
        >
          {t("supplementsForm.Main_ingredients")}
        </Typography>
        {accordionData.map(({ id, title, content }: any) => (
          <Accordion
            key={id}
            disableGutters
            square
            slotProps={{ transition: { unmountOnExit: true } }}
            expanded={expanded === id}
            onChange={handleChange(id)}
            sx={{
              overflow: "hidden",
              marginBottom: "8px",
              boxShadow: "none",
              paddingBottom: "8px",
              borderBottom: "1px solid #A5AB94",
              "&:before": { display: "none" },
              width: "90%",
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
                variant="h4"
                sx={{ color: "#3C3C3C", fontSize: "1.2rem" }}
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
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "1.8rem",
              color: "#A5AB94",
            }}
          >
            {t("supplementsForm.Excipient_Ingredients")}
          </Typography>
        </Box>


        <Typography
          sx={{ marginTop: "15px", width: "84%", color: "#3C3C3C" }}
          dangerouslySetInnerHTML={{ __html: excipientsText }}
        />

        <Box sx={{ borderBottom: "1px solid #A5AB94" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "1.8rem",
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
        {expanded1 && (
          <Accordion
            disableGutters
            square
            slotProps={{ transition: { unmountOnExit: true } }}
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
              <Typography sx={{ color: "#3C3C3C" }}>
                {supplement?.bibliography}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </Box>
  );
};
