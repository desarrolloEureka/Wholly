import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { variety1 } from "../../../assets/images";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../globals/config/config";

export const VarietyBlog = ({ products, loading }: any) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  if (!products || products.length === 0) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>No hay ofertas disponibles.</div>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          paddingTop: "55px",
          borderTop: "2px solid rgba(180, 180, 180, 0.89)", // Línea superior
          margin: "0 auto",
          marginBottom: "70px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.5rem",
            paddingTop: "10px", // Espacio entre la línea y el texto
            color: "#A5AB94",
          }}
        >
          {t("blogForm.products_help")}
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: "50px",
          width: "80%",
          marginX: "auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridAutoColumns: "100px",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyContent: "space-between",
              columnGap: "150px",
              rowGap: "100px",
              width: "100%",
              //maxWidth: "1450px",
              margin: "0 auto",
              paddingX: "50px",
            }}
          >
            {products.map((item: any) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`Supplements/${item.id}`)}
              >
                <img
                  src={item?.image ? `${ConfigConstants.webServiceName}${item.image}` : variety1}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: backgroundColor,
                    padding: "10px 15px",
                    textAlign: "start",
                    border: "1px solid rgba(60, 60, 60, 0.64)",
                    borderTop: "none",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      marginTop: "10px",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: textColor,
                    }}
                  >
                    {currentLang === "es"
                      ? item.name_spanish || item.name_english
                      : item.name_english || item.name_spanish}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1rem",
                      marginTop: "3px",
                      color: textColor,
                      marginBottom: "8px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "3em",
                    }}
                  >
                    {currentLang === "es"
                      ? item.description_spanish || item.description_english
                      : item.description_english || item.description_spanish}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", md: "0.85rem" },
                      color: textColor,
                      marginTop: "5px",
                      marginBottom: "6px",
                      opacity: 0.8,
                    }}
                  >
                    SKU-<strong>{item.code}</strong>
                  </Typography>


                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", md: "1rem" },
                      color: textColor,
                    }}
                  >
                    ${item.amount?.toLocaleString("es-CO") ?? "—"}
                  </Typography>

                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
