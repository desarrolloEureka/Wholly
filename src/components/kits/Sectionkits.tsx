import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// external components
import useSWR from "swr";

// types
import type { Kit } from "../../globals/types";

// utils
import { fetcher } from "../../globals/fetcher/fetcher";
import { useState } from "react";

export const Sectionkits = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  // GET data kits
  const {
    data: DataKits,
    error: errorKits,
    isLoading: isLoadingKits,
  } = useSWR({ url: `/references/apiKits/?page=${currentPage}` }, fetcher);

  // pagination validate
  const page = DataKits?.page ?? 1;
  const count = DataKits?.count ?? 0;
  const pageSize = DataKits?.page_size ?? 0;
  const start = count === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, count);
  const hasMoreThanOnePage = count > pageSize;
  const totalPages = Math.ceil(count / pageSize);
  const isLastPage = page >= totalPages;

  return (
    <Box
      sx={{
        marginBottom: "50px",
      }}
    >
      {errorKits && (
        <span
          style={{
            fontSize: 16,
            color: "red",
          }}
        >
          {errorKits}
        </span>
      )}
      {isLoadingKits ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: 8,
          }}
        >
          <CircularProgress color="primary" size={60} />
        </Box>
      ) : (
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
            {(DataKits.results ?? []).map((item: Kit) => (
              <Box
                key={`kit-${item.id}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={async () => {
                  await localStorage.setItem("kitID", item.id.toString());
                  navigate("/InternalKits");
                }}
              >
                <img
                  src={item.image}
                  alt={
                    currentLang === "es" ? item.name_spanish : item.name_english
                  }
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Box
                  sx={{
                    width: "300px",
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
                      ? item.name_spanish
                      : item.name_english}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1rem",
                      marginTop: "3px",
                      color: textColor,
                      marginBottom: "8px",
                    }}
                  >
                    {currentLang === "es"
                      ? item.description_spanish
                      : item.description_english}
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      width: "50%",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      fontSize: "0.8rem",
                    }}
                  >
                    {`$${item.value}`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {!isLoadingKits && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginTop: "30px",
            marginRight: "85px",
          }}
        >
          {!isLoadingKits && count > 0 && (
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                marginBottom: "10px",
                marginRight: "30px",
                color: "#3C3C3C",
              }}
            >
              {start}-{end} of {count} Results
            </Typography>
          )}

          {!isLoadingKits && hasMoreThanOnePage && (
            <Button
              variant="contained"
              disabled={isLastPage}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50px",
                height: "45px",
                color: "#000",
                border: "2px solid #000",
                "&:hover": { backgroundColor: "#A5AB94", color: "#fff" },
              }}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              {t("categoriesIternal.showProducts")}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};
