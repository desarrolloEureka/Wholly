import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { useState } from "react";

export const SupplementsIngredients = () => {
  const accordionData = [
    {
      id: "panel1",
      title: t("homeform.enterConditions"),
      content: t("homeform.details1"),
    },
    {
      id: "panel2",
      title: t("homeform.enterAllergies"),
      content: t("homeform.details2"),
    },
    {
      id: "panel3",
      title: t("homeform.enterIllnesses"),
      content: t("homeform.details3"),
    },
    {
      id: "panel4",
      title: t("homeform.enterMedications"),
      content: t("homeform.details4"),
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
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        maxWidth: "94%", // Limita el ancho máximo para evitar que se salga
        width: "100%",
        height: "auto",
        gap: "5%", // Espacio uniforme entre los elementos
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
          }}
        >
          Excipient Ingredients
        </Typography>
        {accordionData.map(({ id, title, content }) => (
          <Accordion
            sx={{
              overflow: "hidden",
              marginBottom: "20px",
              boxShadow: "none",
              borderTop: "1px solid #A5AB94",
              borderBottom: "1px solid #A5AB94",
              "&:before": { display: "none" },
              width: "90%", // Igual al de los acordeones
            }}
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Sección de Información */}
      <Box
        sx={{
          width: "45%", // Igual al de los acordeones
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
            Excipient Ingredients
          </Typography>
        </Box>
        <Typography
          variant="body1"
          paragraph
          sx={{
            marginTop: "15px",
            width: "84%",
          }}
        >
          Lorem ipsum, dolor sit amet, consectetur adipiscing elit. Integer
          mattis, nunc augue vel lacinia, erat euismod ut. Sed eleifend, tellus
          non tincidunt aliquet, dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box sx={{ borderBottom: "1px solid #A5AB94" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#A5AB94",
              marginTop: "55px",
            }}
          >
            Bibliography
          </Typography>
        </Box>
        <Typography
          sx={{
            //fontSize: "1px",
            fontWeight: "500",
            marginTop: "15px",
          }}
        >
          List of 5 references
        </Typography>
      </Box>
    </Box>
  );
};
