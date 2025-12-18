import {
  Typography,
  Box,
  TextField,
  OutlinedInput,
  Button,
  CircularProgress,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import { asyncSendApis } from "../../globals/services/service";
import { ApiData } from "../../globals/services/api";
import { useState } from "react";
import Swal from "sweetalert2";

export const CustomerService = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem("Token");
  const isLogged = Boolean(token);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const validate = () => {
    let newErrors = { email: "", message: "" };
    let valid = true;

    if (!message.trim()) {
      newErrors.message = "Support.ErrorMessageRequired";
      valid = false;
    }

    if (!isLogged) {
      if (!email.trim()) {
        newErrors.email = "Support.ErrorEmailRequired";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Support.ErrorEmailInvalid";
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSend = async () => {
    if (!validate()) return;
    try {
      setLoading(true);

      const body: any = {
        comment: message,
      };

      if (!isLogged) {
        body.email = email;
      }

      const apiData: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "POST",
        body: body
      };

      const response = await asyncSendApis("/supplements/apiCreateSupportPQR", apiData);
      setMessage("");
      setEmail("");
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: "Solicitud enviada",
          text: "Tu mensaje fue enviado correctamente",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#A5AB94",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema enviando tu solicitud. Intenta nuevamente.",
          confirmButtonText: "Cerrar",
        });
      }
    } catch (error) {
      console.error("Error enviando soporte:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema enviando tu solicitud. Intenta nuevamente.",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        pl: 32,
        pr: 32,
        pt: 5,
        pb: 5,
        textAlign: "center",
        backgroundColor: "#EEF1F0",
        width: "95%",
        margin: "0 auto",
        mt: "50px",
        mb: "5px",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.43)",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            color="#A5AB94"
            borderBottom="1px solid #3C3C3C"
            sx={{
              width: "50%",
              textAlign: "center",
              paddingBottom: "16px",
              marginBottom: "10px",
            }}
          >
            {t("Support.CustomerService")}
          </Typography>
        </Box>

        <Typography color="textSecondary">
          {t("Support.Description")}
        </Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            mt: 2,
            backgroundColor: "white",
            borderRadius: "5px",
            "& .MuiInputBase-root": {
              lineHeight: "2em",
            },
          }}
        />

        {errors.message && (
          <Typography sx={{ color: "red", textAlign: "left", mt: 1 }}>
            *{t(errors.message)}
          </Typography>
        )}


        {!isLogged && (
          <>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <EmailIcon sx={{ color: "#A5AB94", fontSize: 30 }} />
              <Typography sx={{ color: "#3C3C3C", fontSize: "14px" }}>
                {t("Support.YourEmail")}
              </Typography>
            </Box>


            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "35%",
              }}
            >
              <OutlinedInput
                fullWidth
                sx={{
                  height: "39px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Support.EmailPlaceholder")}
              />
            </Box>

            {errors.email && (
              <Typography sx={{ color: "red", textAlign: "left", mt: 1 }}>
                *{t(errors.email)}
              </Typography>
            )}
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={loading}
          sx={{
            backgroundColor: "#A5AB94",
            color: "#ffffff",
            borderRadius: "20px",
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#A5AB94" },
            minWidth: "150px",
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            t("Support.SendComment")
          )}
        </Button>
      </Box>
    </Box>
  );
};
