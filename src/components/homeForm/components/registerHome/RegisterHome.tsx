import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";

export const RegisterHome = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 3, md: 30 },
        marginLeft: "4%",
        marginBottom: 0,
        height: "80vh",
        marginTop: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "70vh",
          width: { xs: "80%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 4, fontSize: "2.1rem", color: "#3C3C3C" }}
        >
          {t("homeform.title2")}
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#333", mb: 4 }}>
          {t("homeform.description")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: " #A5AB94",
            borderRadius: "10px",
            padding: "10px 20px",
            marginTop: "18px",
            textTransform: "none",
            width: 145,
            "&:hover": {
              backgroundColor: "rgb(87, 90, 77)",
            },
          }}
          disableElevation
        >
          {t("homeform.register")}
        </Button>
      </Box>
      {/* pendiente */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          marginTop: "5%",
          marginLeft: "1%",
          marginRight: "7%",
          width: { xs: "80%", md: "60%" },

          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            backgroundColor: "#E8E4DF",
            backdropFilter: "blur(10px)",
            borderRadius: 4,
            boxShadow: 5,
            width: "100%",
            margin: "15px 10px",
            marginBottom: "25px",
            height: "auto",
            padding: "20px",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          {/* Botón de cierre */}
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
            onClick={() => console.log("Cerrar")}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h1"
            sx={{
              fontSize: "1.1rem",
              marginBottom: "10px",
              fontWeight: "bold",
              fontFamily: "Inter",
              color: "#333",
            }}
          >
            {t("homeform.enterTrends")}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#333",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {t("homeform.loremText")}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          {accordionData.map(({ id, title, content }) => (
            <Accordion
              sx={{
                border: "1px solid #ccc",
                borderRadius: "30px !important",
                overflow: "hidden",
                marginBottom: "20px",
                "&:before": { display: "none" },
                "&.MuiPaper-root": {
                  borderRadius: "30px !important",
                },
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
      </Box>
    </Box>
  );
};
