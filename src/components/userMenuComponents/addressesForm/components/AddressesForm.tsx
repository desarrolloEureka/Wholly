import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import {
  LocationOn,
  PersonPin,
  Phone,
  LocalLibrary,
  Map,
  PinDrop,
  Public,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";


const AddressesForm = ({ onBack }: { onBack: () => void }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          paddingTop: "50px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PersonPin sx={{ color: "#3C3C3C" }} />
            <Typography
              variant="h6"
              sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
            >
              {t("addressesForm.addressName")}
            </Typography>
          </Box>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="addressName"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#858585",
                  borderWidth: "2px",
                },
              },
            }}
          />
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn sx={{ color: "#3C3C3C" }} />
            <Typography
              variant="h6"
              sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
            >
              {t("addressesForm.address")}
            </Typography>
          </Box>
          <TextField
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#858585",
                  borderWidth: "2px",
                },
              },
            }}
          />
        </Box>


        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn sx={{ color: "#3C3C3C" }} />
            <Typography
              variant="h6"
              sx={{ color: "#3C3C3C", fontSize: "1.3rem", mb: 1 }}
            >
              {t("addressesForm.complement")}
            </Typography>
          </Box>
          <TextField
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#858585",
                  borderWidth: "2px",
                },
              },
            }}
          />
        </Box>


        <Box sx={{ display: "flex", gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ color: "#3C3C3C" }} />
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
              >
                {t("addressesForm.contactNumber")}
              </Typography>
            </Box>
            <TextField
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                    borderWidth: "2px",
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalLibrary sx={{ color: "#3C3C3C" }} />
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
              >
                {t("addressesForm.zipCode")}
              </Typography>
            </Box>
            <TextField
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                    borderWidth: "2px",
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 6 }}>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Public sx={{ color: "#3C3C3C" }} />
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
              >
                {t("addressesForm.country")}
              </Typography>
            </Box>
            <TextField
              select
              fullWidth
              size="small"
              name="country"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                    borderWidth: "2px",
                  },
                },
              }}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Colombia">Colombia</MenuItem>
              <MenuItem value="Mexico">México</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Map sx={{ color: "#3C3C3C" }} />
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
              >
                {t("addressesForm.state")}
              </Typography>
            </Box>
            <TextField
              select
              fullWidth
              size="small"
              name="state"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                    borderWidth: "2px",
                  },
                },
              }}
            >
              <MenuItem value="FL 32809">FL 32809</MenuItem>
              <MenuItem value="FL 33101">FL 33101</MenuItem>
              <MenuItem value="FL 33601">FL 33601</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PinDrop sx={{ color: "#3C3C3C" }} />
              <Typography
                variant="h6"
                sx={{ color: "#3C3C3C", fontSize: "1.3rem" }}
              >
                {t("addressesForm.city")}
              </Typography>
            </Box>
            <TextField
              select
              fullWidth
              size="small"
              name="city"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#858585",
                    borderWidth: "2px",
                  },
                },
              }}
            >
              <MenuItem value="Orlando">Orlando</MenuItem>
              <MenuItem value="Miami">Miami</MenuItem>
              <MenuItem value="Tampa">Tampa</MenuItem>
            </TextField>
          </Box>


        </Box>

        <FormControlLabel
          control={
            <Checkbox
              name="default"
              defaultChecked
              sx={{
                color: "#9da089",
                "&.Mui-checked": {
                  color: "#9da089",
                },
              }}
            />
          }
          label={t("addressesForm.defaultAddress")}
          sx={{ pl: 1 }}
        />

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 500,
              width: "140px",
              height: "38px",
              color: "#3C3C3C",
              borderColor: "#b2b69d",
              fontSize: "0.9rem",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#9da089",
              },
            }}
          >
            {t("addressesForm.cancel")}
          </Button>

          <Button
            variant="contained"
            onClick={onBack}
            sx={{
              bgcolor: "#b2b69d",
              "&:hover": { bgcolor: "#9da089" },
              borderRadius: "20px",
              width: "140px",
              height: "38px",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#fff",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            {t("addressesForm.save")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressesForm;
