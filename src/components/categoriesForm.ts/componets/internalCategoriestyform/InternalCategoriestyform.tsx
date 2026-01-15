import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { variety1 } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import { ConfigConstants } from "../../../../globals/config/config";

export const InternalCategoriestyform = ({
  items,
  onLoadMore,
  hasMore,
  totalItems
}: any) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginBottom: "50px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "150px",
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
            paddingX: "70px",
          }}
        >
          {items?.map((item: any) => (
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
              onClick={() => navigate(`/Supplements/${item.id}`)}
            >
              <img
                src={item?.image ? `${ConfigConstants.webServiceName}${item.image}` : variety1}
                alt={item.title}
                loading="lazy"
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
                    fontSize: "1.4rem",
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
                    ? item.short_description_spanish || item.short_description_english
                    : item.short_description_english || item.short_description_spanish}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "85px",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            marginBottom: "10px",
            marginRight: "30px",
            color: "#3C3C3C",
          }}
        >
          {items.length > 0 ? `1-${items.length} of ${totalItems} Results` : "0 Results"}
          {/*  1-60 of 1921 Result */}
        </Typography>
        {hasMore && (
          <Button
            variant="contained"
            onClick={onLoadMore}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "50px",
              height: "45px",
              color: "#000",
              border: "2px solid #000",
              "&:hover": { backgroundColor: "#A5AB94", color: "#fff" },
            }}
          >
            {t("categoriesIternal.showProducts")}
          </Button>
        )}
      </Box>
    </Box>
  );
};
