import { useState } from "react";
import { Box, Typography, Collapse, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { InformationComponent } from "./components/checkout/InformationComponent";
import { ShippingComponent } from "./components/checkout/ShippingComponent";
import { PaymentComponent } from "./components/checkout/PaymentComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CheckoutForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  type OptionType = "Information" | "Shipping" | "Payment";
  const [expanded, setExpanded] = useState<OptionType | null>("Information");

  const titleMap: Record<OptionType, string> = {
    Information: t("shoppingCart.informationTitle"),
    Shipping: t("shoppingCart.shippingTitle"),
    Payment: t("shoppingCart.paymentTitle"),
  };

  const handleNextStep = (nextStep: OptionType) => {
    setExpanded(nextStep);
  };

  const handleSelect = (option: OptionType) => {
    setExpanded((prev) => (prev === option ? null : option));
  };

  const content: Record<OptionType, JSX.Element> = {
    Information: (
      <InformationComponent onOpen={() => handleNextStep("Shipping")} />
    ),
    Shipping: <ShippingComponent onOpen={() => handleNextStep("Payment")} />,
    Payment: <PaymentComponent />,
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "30px 10px 30px 10px",
          sm: "none",
          md: "35px 45px 35px 45px",
        },
      }}
    >
      {/* Menú de selección (NO cambia los nombres) */}
      <Box
        display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        gap={2}
        p={0}
      >
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
                  fontSize: "18px",
                  color: expanded === option ? "#A5AB94" : " #A5AB94",
                  opacity: expanded === option ? 1 : 0.6,
                  transition:
                    "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
                  textTransform: "uppercase",
                }}
              >
                {t(`shoppingCart.${option}`)}
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: 20,
                  ml: 0.5,
                  transform:
                    expanded === option ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                  color: expanded === option ? "#A5AB94" : " #A5AB94",
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
          display: { xs: "none", sm: "flex" },
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
        <Typography sx={{ fontWeight: 500, color: "#3C3C3C" }}>
          {t("shoppingCart.AlreadyAccount")}
          <span
            onClick={() => navigate("/login")}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              marginRight: "4px",
              marginLeft: "4px",
            }}
          >
            {t("shoppingCart.Login")}
          </span>
          {t("shoppingCart.forCheckout")}
        </Typography>
      </Box>

      {/* Acordeones (Usan los nuevos nombres) */}
      <Box sx={{ width: { xs: "100%", sm: "80%" } }}>
        {(["Information", "Shipping", "Payment"] as OptionType[]).map(
          (option, index) => (
            <Box key={option} width="100%" sx={{ marginBottom: "30px" }}>
              <Box
                onClick={() => handleSelect(option)}
                sx={{ cursor: "pointer" }}
              >
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
                      fontSize: "20px",
                      color: expanded === option ? "#000" : "inherit",
                      opacity: expanded === option ? 1 : 0.6,
                      transition:
                        "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
                    }}
                  >
                    <span style={{ fontSize: "17px", marginRight: "5px" }}>
                      {index + 1}
                    </span>
                    {titleMap[option]}
                  </Typography>
                </Box>
              </Box>

              {/* Contenido desplegable */}
              <Collapse in={expanded === option}>
                <Box>{content[option]} </Box>

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
          width: { xs: "100%", sm: "420px" },
          height: "85px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ fontWeight: 400, color: "#3C3C3C" }}>
          {t("shoppingCart.continueRegister")}
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
          marginLeft: { xs: "35px", sm: "0px" },
        }}
        onClick={() => navigate("/register")}
      >
        {t("shoppingCart.register")}
      </Button>
    </Box>
  );
};
