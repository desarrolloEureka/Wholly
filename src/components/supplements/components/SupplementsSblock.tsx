import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { SupleInformationSection } from "./SupleInformationSection";

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
        justifyContent: "flex-start",
        marginTop: "5%",
        width: "100%",
        paddingLeft: { xs: "0", sm: "0", md: "3%" },
        paddingRight: { xs: "0", sm: "0", md: "3%" },
        height: "auto",
        gap: isMobile || isTablet ? "15px" : "13%",
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
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
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
                sx={{ color: "#3C3C3C", fontSize: "19px" }}
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

      <Box display={{ xs: "none", md: "block" }}>
        <SupleInformationSection />
      </Box>
    </Box>
  );
};
