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
import { t } from "i18next";
import AddIcon from "@mui/icons-material/Add";

export const RegisterHome = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const accordionData = [
    {
      id: "panel1",
      title: "Enter your conditions",
      content: "Detalles",
    },
    {
      id: "panel2",
      title: "Enter your allergies",
      content: "Detalles",
    },
    {
      id: "panel3",
      title: "Enter your illnesses",
      content: "Detalles",
    },
    {
      id: "panel4",
      title: "Enter your medications",
      content: "Detalles",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 3, md: 15 },
        marginLeft: "4%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "70vh",
          marginBottom: "4%",
        }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 4, fontFamily: "Montserrat ", color: "#3C3C3C" }}
        >
          Register and customize your searches automatically
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#333", mb: 4 }}>
          Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit.
          Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend
          tellus nonole tincidunt aliquet.
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
          {t("REGISTER")}
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
          width: "60%",

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
            Enter your trends
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus
            non tincidunt aliquet. Fusce aliquam mi felis.
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
