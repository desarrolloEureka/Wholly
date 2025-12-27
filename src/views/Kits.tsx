import { Box, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { HomeCategories } from "../components/homeForm/components/homeCategories/HomeCategories";
import { HomeExclusive } from "../components/homeForm/components/homeExclusive/HomeExclusive";
import { useTranslation } from "react-i18next";
import { Sectionkits } from "../components/kits/Sectionkits";

// external components
import useSWR from "swr";

// utils
import { fetcher } from "../globals/fetcher/fetcher";

export const Kits = () => {
  const { t } = useTranslation();

  // GET data categories
  const {
    data: DataCategories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR({ url: "/supplements/apiCategory" }, fetcher);

  // GET data supplements exclusive offers
  const {
    data: DataExclusive,
    error: errorExclusive,
    isLoading: isLoadingExclusive,
  } = useSWR({ url: "/references/apiSupplementExclusiveOffers" }, fetcher);

  return (
    <Box justifyContent="space-between">
      <Box className="bg_InternalCategoriesty_image">
        <CustomAppBar />
        <Typography
          variant="h2"
          sx={{
            textAlign: "start",
            width: "50%",
            mt: "9%",
            marginLeft: "50px",
            fontSize: "2.6rem",
            fontWeight: 100,
            color: "#Ffff",
          }}
        >
          {t("Kits.title")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "90px",
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
          {t("Kits.completeKits")}
        </Typography>
      </Box>
      <Sectionkits />

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
        }}
      >
        {errorExclusive && (
          <span
            style={{
              fontSize: 16,
              color: "red",
            }}
          >
            {errorExclusive}
          </span>
        )}
        <HomeExclusive
          loading={isLoadingExclusive}
          exclusiveOffers={DataExclusive}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: " rgba(28, 28, 28, 0.7)",
            height: "2px",
            width: "90%",
            margin: "auto",
            marginTop: "6%",
            marginBottom: "8%",
          }}
        ></Box>

        <Typography
          variant="h3"
          sx={{
            marginBottom: "6%",
            fontWeight: "bold",
            ml: "60px",
            color: "#3C3C3C",
            fontSize: "2.1rem",
          }}
        >
          {t("categoriesIternal.YouLike")}
        </Typography>

        {errorCategories && (
          <span
            style={{
              fontSize: 16,
              color: "red",
            }}
          >
            {errorCategories}
          </span>
        )}
        <HomeCategories
          loading={isLoadingCategories}
          categories={DataCategories}
        />
      </Box>

      <FooterApp />
    </Box>
  );
};
