import { Box, CircularProgress, Typography } from "@mui/material";
import CustomAppBar from "../components/customAppBar/CustomAppBar";
import FooterApp from "../components/footerApp/FooterApp";
import { Homevariety } from "../components/homeForm/components/homeVariety/HomeVariety";
import { SupplementsIngredients } from "../components/supplements/components/SupplementsIngredients";
import { SupplementsSblock } from "../components/supplements/components/SupplementsSblock";
import { SupplementSession } from "../components/supplements/components/SupplementSsession";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiData } from "../globals/services/api";
import { asyncSendApis } from "../globals/services/service";

export const Supplements = () => {
  const { t } = useTranslation(undefined, { useSuspense: false });
  const { id } = useParams();

  const [supplement, setSupplement] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchSupplementDetails = async () => {
    try {
      setLoading(true);
      const apiData: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "GET",
      };

      const response = await asyncSendApis(`/supplements/apiSupplementDetails/${id}`, apiData);
      setSupplement(response);
    } catch (error) {
      console.error("Error obteniendo suplemento:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSupplementDetails();
    }
  }, [id]);

  return (
    <Box justifyContent="space-between">
      <CustomAppBar />

      {loading ? (
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
          <SupplementSession
            supplement={supplement}
          />

          <Box
            sx={{
              backgroundColor: "#E8E4DE",
            }}
          >
            <SupplementsSblock
              supplement={supplement}
            />
          </Box>

          <SupplementsIngredients
            supplement={supplement}
          />

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
          <Homevariety />
        </>
      )}
      <FooterApp />
    </Box>
  );
};
