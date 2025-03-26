import { useState } from "react";
import { Box, Typography, Collapse, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { InformationComponent } from "./InformationComponent";
import { ShippingComponent } from "./ShippingComponent";
import { PaymentComponent } from "./PaymentComponent";
import { useNavigate } from "react-router-dom";

type OptionType = "Information" | "Shipping" | "Payment";

// Mapeo de nombres personalizados SOLO para los acordeones
const titleMap: Record<OptionType, string> = {
  Information: " Contact information ",
  Shipping: " Shipping details",
  Payment: " Payment",
};

export const CheckoutForm = () => {
  const [expanded, setExpanded] = useState<OptionType | null>(null);
  const handleNextStep = (nextStep: OptionType) => {
    setExpanded(nextStep);
  };

  // Contenido asociado a cada opción
  const content: Record<OptionType, JSX.Element> = {
    Information: (
      <InformationComponent onOpen={() => handleNextStep("Shipping")} />
    ),
    Shipping: <ShippingComponent onOpen={() => handleNextStep("Payment")} />,
    Payment: <PaymentComponent />,
  };

  const handleSelect = (option: OptionType) => {
    setExpanded((prev) => (prev === option ? null : option));
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "35px 45px 35px 45px" }}>
      {/* Menú de selección (NO cambia los nombres) */}
      <Box display="flex" gap={2} p={0}>
        {(["Information", "Shipping", "Payment"] as OptionType[]).map(
          (option) => (
            <Box
              key={option}
              onClick={() => handleSelect(option)}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "10px",
                  color: expanded === option ? "#A5AB94" : "inherit",
                  opacity: expanded === option ? 1 : 0.6,
                  transition:
                    "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
                  textTransform: "uppercase",
                }}
              >
                {option}
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: 20,
                  ml: 0.5,
                  transform:
                    expanded === option ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                  color: expanded === option ? "#A5AB94" : "inherit",
                  opacity: expanded === option ? 1 : 0.6,
                }}
              />
            </Box>
          )
        )}
      </Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          width: "420px",
          height: "95px",
          marginTop: "30px",
        }}
      >
        <Typography variant="body1">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              marginRight: "4px",
              marginLeft: "4px",
            }}
          >
            Log in
          </span>
          for faster checkout.
        </Typography>
      </Box>

      {/* Acordeones (Usan los nuevos nombres) */}
      <Box sx={{ width: "80%" }}>
        {(["Information", "Shipping", "Payment"] as OptionType[]).map(
          (option, index) => (
            <Box key={option} width="100%" sx={{ marginBottom: "30px" }}>
              {/* Título del acordeón con borde condicional */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  borderBottom:
                    expanded === option ? "none" : "1px solid #D2D2D7",
                  transition: "border-bottom 0.2s ease-in-out",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "12px",
                    color: expanded === option ? "#000" : "inherit",
                    opacity: expanded === option ? 1 : 0.6,
                    transition:
                      "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ fontSize: "17px" }}>{index + 1}</span>
                  {titleMap[option]}
                </Typography>
              </Box>

              {/* Contenido desplegable */}
              <Collapse in={expanded === option}>
                <Box>{content[option]}</Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#D2D2D7",
                    mt: 2,
                  }}
                />
              </Collapse>
            </Box>
          )
        )}
      </Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          width: "420px",
          height: "95px",
          marginTop: "30px",
          marginBottom: "30px",
          color: "rgba(60, 60, 60, 0.93)",
        }}
      >
        <Typography variant="body1">
          To continue with your purchase you must register firs
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "80%",
          borderRadius: "16px",
          boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.5)",
          backgroundColor: "#A5AB94",
          height: "38px",
        }}
        onClick={() => navigate("/register")}
      >
        REGISTER
      </Button>
    </Box>
  );
};
