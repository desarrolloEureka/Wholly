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
      title: t("Ciprofibrato"),
      content: t(
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. "
      ),
    },
    {
      id: "panel2",
      title: t("Levemir"),
      content: t(
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. "
      ),
    },
    {
      id: "panel3",
      title: t("Locusim"),
      content: t(
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. "
      ),
    },
    {
      id: "panel4",
      title: t("Ultrasomes"),
      content: t(
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. "
      ),
    },
    {
      id: "panel4",
      title: t("Epidermosil"),
      content: t(
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. "
      ),
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
            paddingBottom: "5px", // Ajusta según necesites
            borderBottom: "1px solid #A5AB94",
            marginBottom: "10px",
            width: "90%",
          }}
        >
          Main ingredients
        </Typography>
        {accordionData.map(({ id, title, content }) => (
          <Accordion
            sx={{
              overflow: "hidden",
              marginBottom: "8px",
              boxShadow: "none",
              paddingBottom: "8px", // Ajusta según necesites
              borderBottom: "1px solid #A5AB94",
              "&:before": { display: "none" },
              width: "90%", // Igual al de los acordeones
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
          paragraph
          sx={{
            marginTop: "15px",
            width: "84%",
            color: "#3C3C3C",
          }}
        >
          Lorem ipsum, dolor sit amet, consectetur adipiscing elit. Integer
          mattis, nunc augue vel lacinia, erat euismod ut. Sed eleifend, tellus
          non tincidunt aliquet, dolor sit amet, consectetur adipiscing elit.
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
            Bibliography
          </Typography>
        </Box>
        <Typography
          sx={{
            //fontSize: "1px",
            fontWeight: "500",
            marginTop: "15px",
            color: "#3C3C3C",
            borderBottom: "1px solid rgba(60, 60, 60, 0.55)",
            width: "19%",
          }}
        >
          List of 5 references
        </Typography>
      </Box>
    </Box>
  );
};
