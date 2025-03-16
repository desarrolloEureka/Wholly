import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export const SupplementsSblock = () => {
  const accordionSblock = [
    {
      id: "panel0",
      number: "00",
      title: t("homeform.enterConditions"),
      content: t("homeform.details1"),
    },
    {
      id: "panel1",
      number: "01",
      title: t("homeform.enterAllergies"),
      content: t("homeform.details2"),
    },
    {
      id: "panel2",
      number: "02",
      title: t("homeform.enterIllnesses"),
      content: t("homeform.details3"),
    },
    {
      id: "panel3",
      number: "03",
      title: t("homeform.enterMedications"),
      content: t("homeform.details4"),
    },
    {
      id: "panel4",
      number: "04",
      title: t("homeform.enterIllnesses"),
      content: t("homeform.details3"),
    },
    {
      id: "panel5",
      number: "05",
      title: t("homeform.enterIllnesses"),
      content: t("homeform.details3"),
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "5%",
        width: "100%",
        height: "auto",
        gap: "5%",
      }}
    >
      {/* Sección de los Acordeones */}
      <Box sx={{ width: "45%", marginBottom: "3%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#3C3C3C",
            marginTop: "70px",
            fontSize: "1.8rem",
            marginBottom: "5px",
            height: "60px",
            width: "90%",
            borderBottom: "1px solid #A5AB94",
          }}
        >
          Sun Block
        </Typography>
        {accordionSblock.map(({ id, number, title, content }) => (
          <Accordion
            sx={{
              overflow: "hidden",
              marginBottom: "20px",
              boxShadow: "none",
              backgroundColor: "#E8E4DE",
              borderBottom: id === "panel5" ? "none" : "1px solid #A5AB94", // Quita el borde solo en el panel5
              borderTop: id === "panel0" ? "none" : "1px solid #A5AB94", // Quita el borde solo en el panel5

              "&:before": { display: "none" },
              width: "90%",
            }}
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "10px",
                  minWidth: "30px",
                  color: "#3C3C3C",
                }}
              >
                {number}
              </Typography>
              <Typography sx={{ color: "#3C3C3C" }}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#3C3C3C" }}>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Sección de Información - Centrada */}
      <Box
        sx={{
          width: "45%",
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
            width: "480px",
            height: "250px",
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.35)",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "335px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
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
                Reference
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
                  fontWeight: 600,
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
                Recommended application time
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
                  fontWeight: 600,
                }}
              >
                6 months
              </Typography>
            </Box>
          </Box>

          {/* Compatibility Message */}
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginTop: "15px" }}
          >
            This product is compatible with you
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
