import { Box, CircularProgress, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { Homevariety } from "../components/homeForm/components/homeVariety/HomeVariety";
import { SupplementsIngredients } from "../components/supplements/components/SupplementsIngredients";
import { SupplementsSblock } from "../components/supplements/components/SupplementsSblock";
import { SupplementSession } from "../components/supplements/components/SupplementSsession";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../globals/fetcher/fetcher";

export const Supplements = () => {
  const { t } = useTranslation(undefined, { useSuspense: false });
  const { id } = useParams();

  // GET data supplements
  const {
    data: dataSupplements,
    error: errorSupplements,
    isLoading: isLoadingSupplements,
  } = useSWR({ url: "/supplements/apiSupplementRandom" }, fetcher);

  // GET data supplement
  const {
    data: dataSupplement,
    error: errorSupplement,
    isLoading: isLoadingSupplement,
  } = useSWR(
    id ? { url: `/supplements/apiSupplementDetails/${id}` } : null,
    fetcher
  );

  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      {errorSupplement && (
        <span
          style={{
            fontSize: 16,
            color: "red",
          }}
        >
          {errorSupplement}
        </span>
      )}

      {isLoadingSupplement ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={60} thickness={4} />
        </Box>
      ) : (
        <>
          <SupplementSession supplement={dataSupplement} />

          <Box
            sx={{
              backgroundColor: "#E8E4DE",
            }}
          >
            <SupplementsSblock supplement={dataSupplement} />
          </Box>

          <SupplementsIngredients supplement={dataSupplement} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                marginTop: "5%",
                marginBottom: "3%",
                fontWeight: "bold",
                color: "#3C3C3C",
                fontSize: "2.1rem",
              }}
            >
              {t("supplementsForm.YouLike")}
            </Typography>
          </Box>
          {errorSupplements && (
            <span
              style={{
                fontSize: 16,
                color: "red",
              }}
            >
              {errorSupplements}
            </span>
          )}
          <Homevariety
            varieties={dataSupplements}
            loading={isLoadingSupplements}
          />
        </>
      )}
      <FooterApp />
    </Box>
  );
};
