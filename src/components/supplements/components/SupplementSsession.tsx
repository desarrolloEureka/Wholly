import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export const SupplementSession = () => {
  const { t } = useTranslation();

  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: t("supplementsForm.sunBlock1"),
      subtitle: t("supplementsForm.subtitle1"),
      description: "$10.99",
      rating: 3.5,
    },
    {
      id: 2,
      src: Session_2,
      title: t("supplementsForm.SunBlock2"),
      subtitle: t("supplementsForm.subtitle2"),
      description: "$15.99",
      rating: 4.0,
    },
    {
      id: 3,
      src: Session_1,
      title: t("supplementsForm.SunBlock3"),
      subtitle: t("supplementsForm.subtitle3"),
      description: "$20.99",
      rating: 4.5,
    },
    {
      id: 4,
      src: variety2,
      title: t("supplementsForm.SunBlock4"),
      subtitle: t("supplementsForm.subtitle4"),
      description: "$19.99",
      rating: 4.5,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
          p: { xs: "0px", sm: "16px", md: "16px" },
          marginLeft: { xs: "3px", sm: "0px", md: "30px" },
          marginTop: "50px",
        }}
      >
        {/* Lista de imágenes a la izquierda en pantallas grandes  */}
        <Box
          sx={{
            width: { xs: "30%", sm: "8%" },
            flexDirection: { xs: "column", sm: "row", md: "column" },
            gap: 2,
            display: { xs: "flex", sm: "none", md: "flex" },
          }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow:
                  selectedProduct.id === product.id
                    ? "-3px 3px 6px rgba(0, 0, 0, 0.8)"
                    : "0px 4px 4px rgba(0, 0, 0, 0.58)",
                width: { xs: 53, sm: 100 },
                height: { xs: 53, sm: 100 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.src}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* Producto seleccionado a la derecha */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "80%" },
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: 2,
            alignItems: "flex-start",
            marginLeft: { xs: 0, sm: "0px", md: "30px", lg: "0px" },
          }}
        >
          <Box
            component="img"
            src={selectedProduct.src}
            alt={selectedProduct.title}
            sx={{
              width: { xs: "260px", sm: "390px", md: "450px" },
              height: { xs: "260px", sm: "390px", md: "450px" },
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "-3px 6px 5px rgba(0, 0, 0, 0.56)",
            }}
          />

          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "28px",
              marginLeft: { xs: "-45px", sm: "7%", md: "10%" },
              width: { xs: "100%", sm: "50%", md: "50%" },
              marginBottom: { xs: "20px" },

              position: { xs: "relative", sm: "none", md: "none" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.8rem" },
                fontWeight: "bold",
                color: "#3C3C3C",
                marginBottom: "32px",
              }}
            >
              {selectedProduct.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                color: "gray",
                marginBottom: "25px",
              }}
            >
              {selectedProduct.subtitle}
            </Typography>

            <Typography
              color="primary"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.8rem" },
                marginTop: "10px",
              }}
            >
              {selectedProduct.description}
            </Typography>

            <span
              style={{
                opacity: 0.6,
                marginLeft: "7px",
                marginBottom: "11px",
                fontSize: "1rem",
                marginTop: "11px",
              }}
            >
              10 units in stock
            </span>

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: { xs: "35px", sm: "28px", md: "35px" },
                backgroundColor: "#A5AB94",
                borderRadius: "40px",
                height: { xs: "32px", sm: "32px", md: "32px" },
                width: { xs: "60%", sm: "59%", md: "68%", lg: "28%" },
                margin: { xs: "0 auto", sm: "0px", md: "0px" },
              }}
            >
              Add to basket
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Lista de imágenes a la izquierda en pantallas de tablet */}
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" }, // Ocupa todo el ancho en móvil, 8% en tablet y más
          flexDirection: { xs: "row", sm: "row" }, // Cambio a columna en móvil, fila en tablet y más grandes
          gap: 2,
          display: { xs: "none", sm: "flex", md: "none" },
          marginLeft: "15px", // Ocultar en tablet y pantallas mayores
        }}
      >
        {products.map((product) => (
          <Paper
            key={product.id}
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow:
                selectedProduct.id === product.id
                  ? "-3px 3px 6px rgba(0, 0, 0, 0.8)"
                  : "0px 4px 4px rgba(0, 0, 0, 0.58)",
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.src}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Paper>
        ))}
      </Box>
      <Typography
        sx={{
          marginTop: { xs: "0px", sm: "18px", md: "0px" }, // Ajusta el margen superior según la pantalla
          marginLeft: { xs: "115px", sm: "18px", md: "50px" }, // Ajusta el margen izquierdo según la pantalla
        }}
      >
        {t("supplementsForm.SeeAll")}
      </Typography>
    </Box>
  );
};
