import { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { t } from "i18next";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { Homevariety } from "../components/homeForm/components/homeVariety/HomeVariety";
import { KitsSession } from "../components/kits/kitsSession/KitsSession";
import { SupplementsIngredients } from "../components/supplements/components/SupplementsIngredients";
import { SupplementsSblock } from "../components/supplements/components/SupplementsSblock";

// utils
import { fetcher } from "../globals/fetcher/fetcher";

// external components
import useSWR from "swr";

export const InternalKits = () => {
  const [currentPage] = useState<number>(1);
  const [currentReference, setCurrentReference] = useState<number | null>(null);

  const kitID = localStorage.getItem("kitID");

  // GET data kit details
  const {
    data: dataKit,
    error: errorKit,
    isLoading: isLoadingKit,
  } = useSWR(
    { url: `/references/apiKitDetail/${kitID}/?page=${currentPage}` },
    fetcher
  );

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
    currentReference
      ? { url: `/references/apiKitReferenceDetail/${currentReference}/` }
      : null,
    fetcher
  );

  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      {errorKit && (
        <span
          style={{
            fontSize: 16,
            color: "red",
          }}
        >
          {errorKit}
        </span>
      )}
      {isLoadingKit ? (
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
        <KitsSession
          kit={dataKit.kit}
          references={dataKit.references}
          setCurrentReference={setCurrentReference}
        />
      )}

      <Box
        sx={{
          backgroundColor: "#E8E4DE",
        }}
      >
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: 8,
            }}
          >
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          dataSupplement?.supplement && (
            <SupplementsSblock supplement={dataSupplement.supplement} />
          )
        )}
      </Box>
      {isLoadingSupplement ? (
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
        dataSupplement?.supplement && (
          <SupplementsIngredients supplement={dataSupplement.supplement} />
        )
      )}

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
      <Homevariety varieties={dataSupplements} loading={isLoadingSupplements} />

      <FooterApp />
    </Box>
  );
};
