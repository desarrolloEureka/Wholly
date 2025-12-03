import PersonIcon from "@mui/icons-material/Person";
import {
  useState,
  SetStateAction,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import Button from '@mui/material/Button';
import KeyIcon from "@mui/icons-material/Key";
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TransgenderIcon from "@mui/icons-material/Transgender";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "react-i18next";
import { StepOneHandle } from "../../../../globals/types";
import ErrorLabel from "../../../errorLabel/ErrorLabel";
import { ApiData } from "../../../../globals/services/api";
import { asyncSendApis } from "../../../../globals/services/service";
import AddIcon from '@mui/icons-material/Add';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ConfigConstants } from "../../../../globals/config/config";

const dataErrors = {
  name: false,
  email: false,
  confirmEmail: false,
  password: false,
  confirmPassword: false,
  lastName: false,
  dateOfBirth: false,
  biologicalSex: false,
  gender: false,
  optionsList: false,
};
export const EditStepOne = forwardRef<StepOneHandle>((props, ref) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState<number | null>(null);
  const [biologicalSex, setBiologicalSex] = useState<number | null>(null);
  const [called, setCalled] = useState<number | null>(null);
  const [errors, setErrors] = useState(dataErrors);
  const [generalError, setGeneralError] = useState<React.ReactNode>("");
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [errorProfile, setErrorProfile] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setConfirmPassword(e.target.value);

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setGender(Number.isNaN(val) ? null : val);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setBiologicalSex(Number.isNaN(val) ? null : val);
  };
  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCalled(Number.isNaN(val) ? null : val);
  };

  const validateForm = () => {
    const newErrors: any = {
      name: !name,
      lastName: !lastName,
      dateOfBirth: !dateOfBirth,
      email: !email,
      confirmEmail: !confirmEmail,
      //password: !password,
      //confirmPassword: !confirmPassword,
      biologicalSex: !biologicalSex,
      gender: !gender,
      optionsList: !called,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      setGeneralError(<ErrorLabel text="Todos los campos son requeridos" />);
      return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setGeneralError("Las contraseñas no coinciden");
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
        confirmPassword: true,
      }));
      return false;
    }

    // Validar que los correos electrónicos coincidan
    if (email !== confirmEmail) {
      setGeneralError("Los correos electrónicos no coinciden");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
        confirmEmail: true,
      }));
      return false;
    }

    // Validar formato de correo electrónico
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(email)) {
      setGeneralError("El correo electrónico no es válido");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return false;
    }

    setGeneralError("");
    return true;
  };

  const getProfileData = async () => {
    try {
      const data: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "GET",
      };

      const response = await asyncSendApis("/profiles/apiClient", data);

      if (response.status) {
        setName(response.first_name || "");
        setLastName(response.last_name || "");
        setEmail(response.email || "");
        setConfirmEmail(response.email || "");
        setDateOfBirth(response.birthday || "");
        setGender(response.gender?.id ?? null);
        setBiologicalSex(response.biological_sex?.id ?? null);
        setCalled(response.called?.id ?? null);
        setProfileImage(response.image || null);
      } else {
        setErrorProfile("No se pudo cargar el perfil.");
        console.error("Error respuesta perfil:", response);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setErrorProfile("Error de conexión con el servidor.");
    } finally {
      setLoadingProfile(false);
    }
  };

  const sendPatchProfile = async () => {
    try {
      if (!validateForm()) return;

      const bodyToSend: any = {
        first_name: name,
        last_name: lastName,
        email: email,
        gender: gender,
        biological_sex: biologicalSex,
        called: called,
        birthday: dateOfBirth,
        password: password,
        //image: newImageFile
      };

      console.log('bodyToSend ', bodyToSend);

      const data: ApiData = {
        token: await localStorage.getItem("Token"),
        method: "PATCH",
        body: bodyToSend,
        //form: 'multipart/form-data'
      };

      const response = await asyncSendApis("/profiles/apiClient", data);
      console.log('response ', response);

      if (response.status) {
        Swal.fire({
          icon: "success",
          title: "Perfil actualizado",
          text: "Tu información ha sido guardada correctamente.",
          confirmButtonColor: "#a8ae9c",
        });
        return true;
      } else {
        console.error("Error al actualizar el perfil:", response);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo actualizar el perfil.",
          confirmButtonColor: "#d33",
        });
        return false;
      }
    } catch (error) {
      console.error("Error de conexión PATCH:", error);
      setGeneralError("Error al conectar con el servidor.");
      return false;
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Box>
      {/* header form */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginLeft: '-150px',
        }}
      >
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {(newImageFile || profileImage) ? (
            <img
              src={
                newImageFile
                  ? URL.createObjectURL(newImageFile)
                  : (profileImage ? ConfigConstants.webServiceName + profileImage : undefined)
              }
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            <CameraAltIcon sx={{ fontSize: 40, color: "#757575" }} />
          )}

          <IconButton
            component="label"   // ← FALTA ESTO
            sx={{
              position: 'absolute',
              right: 4,
              bottom: 4,
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
            }}
          >
            <AddIcon sx={{ fontSize: 16, color: '#757575' }} />

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  console.log('file ', file);
                  setNewImageFile(file);
                }
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centra verticalmente
          alignItems: "center", // Centra horizontalmente
          textAlign: "center",
        }}
      >
        {generalError && (
          <Typography
            variant="body1"
            color="error"
            sx={{ marginBottom: "16px" }}
          >
            {generalError}
          </Typography>
        )}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: "27px", // Nota: notación camelCase para 'fontSize'
              textDecorationSkipInk: "none",
            }}
          >
            {t("registerForm.registrationTitle")}{" "}
            <span
              style={{
                fontFamily: "Gabriela",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {t("registerForm.registrationTitle2")}
            </span>
          </Typography>
        </Box>
      </Box>
      {/* content form */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: { xs: "10px", sm: "60px" }, // Alineación responsiva
            marginBottom: "50px",
            marginTop: "40px",
            flexDirection: { xs: "column", sm: "row" }, // Cambiar a columna en pantallas pequeñas
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "48%" }, // Ancho del formulario de la izquierda
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column", // Alineamos en columna
              alignItems: "flex-start",
              gap: "18px",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: errors.name ? "red" : "#3C3C3C",
                  }}
                >
                  <PersonIcon sx={{ color: errors.name ? "red" : "#3C3C3C" }} />
                  {t("registerForm.yourName")}
                </Box>
              </Typography>
              <OutlinedInput
                placeholder={t("registerForm.yourNamePlaceholder")}
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: errors.email ? "red" : "#3C3C3C",
                  }}
                >
                  <EmailIcon sx={{ color: errors.email ? "red" : "#3C3C3C" }} />
                  {t("registerForm.yourEmail")}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                placeholder={t("registerForm.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: errors.confirmEmail ? "red" : "#3C3C3C",
                  }}
                >
                  <EmailIcon
                    sx={{ color: errors.confirmEmail ? "red" : "#3C3C3C" }}
                  />
                  {t("registerForm.confirmEmail")}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                placeholder={t("registerForm.confirmEmailPlaceholder")}
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    color: errors.password ? "red" : "#3C3C3C",
                  }}
                >
                  <KeyIcon
                    sx={{
                      transform: "rotate(130deg)",
                      color: errors.password ? "red" : "#3C3C3C",
                    }}
                  />
                  {t("registerForm.password")}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                type={showPassword ? "text" : "password"}
                placeholder={t("registerForm.passwordPlaceholder")}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    color: errors.confirmPassword ? "red" : "#3C3C3C",
                  }}
                >
                  <KeyIcon
                    sx={{
                      transform: "rotate(130deg)",
                      color: errors.confirmPassword ? "red" : "#3C3C3C",
                    }}
                  />
                  {t("registerForm.confirmPassword")}
                </Box>
              </Typography>
              <OutlinedInput
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                type={showPassword ? "text" : "password"}
                placeholder={t("registerForm.confirmPasswordPlaceholder")}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "48%" },
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column", // Alineamos en columna
              alignItems: "flex-start",
              gap: "18px",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: errors.lastName ? "red" : "#3C3C3C",
                  }}
                >
                  <PersonOutlineIcon
                    sx={{ color: errors.lastName ? "red" : "#3C3C3C" }}
                  />
                  {t("registerForm.your_last_Name")}
                </Box>
              </Typography>
              <OutlinedInput
                placeholder={t("registerForm.yourNamePlaceholder")}
                sx={{
                  mt: 1,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>

            <Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: errors.dateOfBirth ? "red" : "#3C3C3C",
                }}
              >
                <CalendarMonthIcon
                  sx={{ color: errors.dateOfBirth ? "red" : "#3C3C3C" }}
                />
                {t("registerForm.dateOfBirth")}
              </Box>
            </Typography>

            <Box sx={{ width: "100%" }}>
              <TextField
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    borderRadius: "16px",
                    backgroundColor: "#ffffff",
                    boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.4)",
                  },
                }}
                sx={{
                  width: "60%",
                  mt: -1.1,
                  marginBottom: "44px",
                }}
              />
            </Box>
            <Box
              gap={6}
              display="flex"
              flexDirection="column"
              alignItems="start"
            >
              {/* Primer Box para las opciones Biológicas */}
              <Box display="flex" justifyContent="space-around" gap={5}>
                <FormControl component="fieldset">
                  <Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#3C3C3C",
                      }}
                    >
                      <AccessibilityNewIcon sx={{ color: "#3C3C3C" }} />
                      {t("registerForm.optionsListBiologicalSex")}
                    </Box>
                  </Typography>
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    value={biologicalSex}
                    onChange={handleChange2}
                    aria-label="options"
                    name="radio-buttons-group1"
                    row
                    sx={{ gap: "30px" }}
                  >
                    <FormControlLabel
                      value={1}
                      control={
                        <Radio
                          sx={{
                            color: biologicalSex === 1 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.sexoOption2")}
                    />
                    <FormControlLabel
                      value={2}
                      control={
                        <Radio
                          sx={{
                            color: biologicalSex === 2 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.sexoOption1")}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* Segundo Box para las opciones de Género */}
              <Box display="flex" justifyContent="space-around" gap={5}>
                <FormControl component="fieldset">
                  <Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#3C3C3C",
                      }}
                    >
                      <TransgenderIcon sx={{ color: "#3C3C3C" }} />
                      {t("registerForm.optionsListGender")}
                    </Box>
                  </Typography>

                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    value={gender}
                    onChange={handleChange1}
                    aria-label="options"
                    name="radio-buttons-group2"
                    row
                    sx={{ gap: "30px" }}
                  >
                    <FormControlLabel
                      value={1}
                      control={
                        <Radio
                          sx={{
                            color: gender === 1 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.male")}
                    />
                    <FormControlLabel
                      value={2}
                      control={
                        <Radio
                          sx={{
                            color: gender === 2 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.female")}
                    />
                    <FormControlLabel
                      value={3}
                      control={
                        <Radio
                          sx={{
                            color: gender === 3 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.nobinary")}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* Tercer Box para las opciones  */}
              <Box display="flex" justifyContent="space-around" gap={5}>
                <FormControl component="fieldset">
                  <Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#3C3C3C",
                      }}
                    >
                      <MoreHorizIcon sx={{ color: "#3C3C3C" }} />
                      {t("registerForm.optionsList")}
                    </Box>
                  </Typography>
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    value={called}
                    onChange={handleChange3}
                    aria-label="options"
                    name="radio-buttons-group3"
                    row
                    sx={{ gap: "30px" }} // Ajusta el espacio entre botones
                  >
                    <FormControlLabel
                      value={1}
                      control={
                        <Radio
                          sx={{
                            color: called === 1 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.mr")}
                    />
                    <FormControlLabel
                      value={2}
                      control={
                        <Radio
                          sx={{
                            color: called === 2 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.mrs")}
                    />
                    <FormControlLabel
                      value={3}
                      control={
                        <Radio
                          sx={{
                            color: called === 3 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.miss")}
                    />
                    <FormControlLabel
                      value={4}
                      control={
                        <Radio
                          sx={{
                            color: biologicalSex === 4 ? "#FBFFDD" : "default",
                            "&.Mui-checked": {
                              color: "#FBFFDD",
                            },
                          }}
                        />
                      }
                      label={t("registerForm.ms")}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "1px", // Ajusta la altura según lo necesites
            width: "98%",
            backgroundColor: " #A5AB94",
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          right: 30,
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              color: '#3C3C3C',
              borderColor: '#A5AB94',
              width: '140px',
              px: 4,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                borderColor: '#A5AB94',
              },
            }}
            onClick={() => navigate('/')}
          >
            {t('registerForm.cancel')}
          </Button>

          <Button
            variant='contained'
            onClick={() => sendPatchProfile()}
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              backgroundColor: '#a8ae9c',
              color: '#fff',
              px: 4,
              width: '140px',

              '&:hover': {
                backgroundColor: '#949b89',
              },
            }}
          >
            {t('registerForm.save')}
          </Button>
        </Box>
      </Box>

    </Box>
  );
});
