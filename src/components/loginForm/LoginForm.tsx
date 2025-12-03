import { Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { logo_app } from "../../assets/images";
import { InteractiveText } from "../../globals/elements";
import ErrorLabel from "../errorLabel/ErrorLabel";
import LoginFormHook from "./hooks/LoginFormHook";

const LoginForm = () => {

  const {
    showPassword,
    setPassword,
    setEmail,
    acceptedTerms,
    setAcceptedTerms,
    errorTerms,
    setErrorTerms,
    errorEmail,
    setErrorEmail,
    errorPassword,
    setErrorPassword,
    isLogged,
    setIsLogged,
    textError,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    handleLogin,
    navigate,
    t,
    errorGeneral
  } = LoginFormHook();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es de móvil o tablet

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? 3 : 3, // Reduce el padding en móviles para más espacio interno
        backgroundColor: "background.paper",
        borderRadius: 4,
        boxShadow: 8,
        width: isMobile ? "100%" : "90%", // Mantiene un tamaño adecuado en móviles
        maxWidth: isMobile ? "400px" : "500px", // Fija el tamaño máximo en móviles
        marginTop: isMobile ? "40px" : "60px",
        marginBottom: isMobile ? "30px" : "45px",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <img
        src={logo_app}
        alt="logo"
        style={{ width: isMobile ? "50%" : "60%" }}
      />
      <Box
        sx={{
          height: "1px",
          width: "98%",
          backgroundColor: "#A5AB94",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      />
      {isLogged && (errorTerms || errorEmail || errorPassword || errorGeneral) && (
        <ErrorLabel
          text={
            errorTerms
              ? textError.terms
              : errorEmail
                ? textError.email
                : errorPassword
                  ? textError.password
                  : 'Las credenciales proporcionadas no son válidas. '
          }
        />
      )}
      <Box
        component="form"
        sx={{ m: 1, width: "100%" }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              width: isMobile ? "95%" : "82%",
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              textAlign: "left",
              marginLeft: isMobile ? "20px" : "none",
            }}
          >
            {t("loginForm.email")}
          </Typography>

          <FormControl
            sx={{
              width: isMobile ? "90%" : "82%",
              height: isMobile ? "28px" : "35px",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.875rem",
                padding: isMobile ? "6px 6px" : "8px 8px",
                height: "100%",
                lineHeight: "1.5",
                borderRadius: "8px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" />
                </InputAdornment>
              }
              onChange={(e) => {
                setIsLogged(false);
                if (e.target.value === "") {
                  setEmail("");
                  setErrorEmail(true);
                } else {
                  setEmail(e.target.value);
                  setErrorEmail(false);
                }
              }}
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              width: isMobile ? "95%" : "82%",
              textAlign: "start",
              marginTop: isMobile ? "16px" : "22px",
              marginLeft: isMobile ? "20px" : "none",
            }}
          >
            {t("loginForm.password")}
          </Typography>

          <FormControl
            sx={{
              width: isMobile ? "90%" : "82%",
              height: isMobile ? "28px" : "35px",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.875rem",
                padding: isMobile ? "6px 6px" : "8px 8px",
                height: "100%",
                lineHeight: "1.5",
                borderRadius: "8px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <KeyIcon sx={{ transform: "rotate(130deg)" }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                    sx={{}}
                  >
                    {showPassword ? (
                      <VisibilityOff
                        sx={{ fontSize: isMobile ? "18px" : "none" }}
                      />
                    ) : (
                      <Visibility
                        sx={{ fontSize: isMobile ? "18px" : "none" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => {
                setIsLogged(false);
                if (e.target.value === "") {
                  setPassword("");
                  setErrorPassword(true);
                } else {
                  setPassword(e.target.value);
                  setErrorPassword(false);
                }
              }}
            />
          </FormControl>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: isMobile ? "95%" : "82%",
              marginTop: isMobile ? "6px" : "8px",
            }}
          >
            <Typography>
              <InteractiveText
                onClick={() => navigate("/remember")}
                data-position="end"
                style={{
                  textDecoration: "underline",
                  fontSize: isMobile ? "0.75rem" : "0.845rem",
                  cursor: "pointer",
                }}
              >
                {t("loginForm.forgotPassword")}
              </InteractiveText>
            </Typography>
          </Box>
        </Box>
      </Box>
      <FormGroup
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row", // Mantiene el checkbox al lado del texto
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptedTerms}
              sx={{
                color: "default",
                "&.Mui-checked": {
                  color: "#A5AB94",
                },
              }}
              onChange={(e) => {
                setIsLogged(false);
                setAcceptedTerms(e.target.checked);
                setErrorTerms(!e.target.checked);
              }}
            />
          }
          label={
            <Box sx={{ textAlign: "left" }}>
              <span
                style={{
                  fontSize: isMobile ? "0.595rem" : "0.875rem", // Texto más grande en pantallas grandes
                }}
              >
                {t("loginForm.accept")}{" "}
                <a
                  href="/documents/politica.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  {t("loginForm.termsAndConditions")}
                </a>
                <span
                  style={{
                    color: "#ccc",
                    marginLeft: 3,
                    marginRight: 3,
                  }}
                >
                  |
                </span>
                <a
                  href="/documents/politica.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  {t("loginForm.privacyPolicy")}
                </a>
              </span>
            </Box>
          }
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </FormGroup>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#A5AB94",
          borderRadius: "25px",
          padding: isMobile ? "5px 12px" : "10px 20px", // Reducir padding solo en móviles
          marginTop: "15px",
          marginRight: isMobile ? 1 : "none",
          textTransform: "none",
          width: isMobile ? 130 : 145, // Ancho más pequeño en móviles
          fontSize: isMobile ? "0.75rem" : "0.875rem", // Reducir tamaño del texto solo en móviles
          minHeight: isMobile ? "35px" : "40px", // Reducir altura solo en móviles
          "&:hover": {
            backgroundColor: "rgb(87, 90, 77)",
          },
        }}
        disableElevation
        onClick={handleLogin}
      >
        {t("loginForm.login")}
      </Button>
    </Box>
  );
};

export default LoginForm;
