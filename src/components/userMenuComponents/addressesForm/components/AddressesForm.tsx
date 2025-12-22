import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  CircularProgress,
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

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

// external components
import useSWR from "swr";
import { Formik } from "formik";

// schema
import { CreateAddressSchema } from "./schema";

// types
import type { ValuesUpdateAddressProps } from "./types";
import type { Address } from "../../../../globals/types";

// utils
import { fetcher } from "../../../../globals/fetcher/fetcher";
import { ParseCountriesData } from "../../../../globals/utils";

// requests
import { UpdateAddressRequest } from "../../../../requests/update-address-request/update-address-request";
import { CreateAddressRequest } from "../../../../requests/create-address-request/create-address-request";

const AddressesForm = ({
  onBack,
  currentItem,
  setCurrentItem,
}: {
  onBack: () => void;
  currentItem: Address | null;
  setCurrentItem: Dispatch<SetStateAction<Address | null>>;
}) => {
  const { t } = useTranslation();
  const [isMain, setIsMain] = useState<boolean>(false);
  const [country, setCountry] = useState<number | null>(
    currentItem?.country.id ?? null
  );
  const [departament, setDepartament] = useState<number | null>(
    currentItem?.departament?.id ?? null
  );
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // GET data countries
  const { data: DataCountries, isLoading: isLoadingCountries } = useSWR(
    { url: "/regions/apiCountry" },
    fetcher
  );

  // GET data departaments
  const { data: DataDepartaments, isLoading: isLoadingDepartaments } = useSWR(
    country ? { url: `/regions/apiDepartament?country=${country}` } : null,
    fetcher
  );

  // GET data cities
  const { data: DataCities, isLoading: isLoadingCities } = useSWR(
    country ? { url: `/regions/apiCity?departament=${departament}` } : null,
    fetcher
  );

  const handleUpdateAddress = ({
    address,
    address_name,
    city,
    complement,
    contact_number,
    postal_code,
  }: ValuesUpdateAddressProps) => {
    UpdateAddressRequest({
      id: currentItem?.id.toString() ?? "",
      address,
      address_name,
      city,
      complement,
      contact_number,
      postal_code,
      isMain,
      setIsError,
      setIsLoading,
      onBack,
      setCurrentItem,
    });
  };

  const handleCreateAddress = ({
    address,
    address_name,
    city,
    complement,
    contact_number,
    postal_code,
  }: ValuesUpdateAddressProps) => {
    CreateAddressRequest({
      address,
      address_name,
      city,
      complement,
      contact_number,
      postal_code,
      isMain,
      setIsError,
      setIsLoading,
      onBack,
    });
  };

  useEffect(() => {
    if (currentItem) {
      setCountry(currentItem.country.id);
      setDepartament(currentItem.departament?.id ?? null);
      setIsMain(currentItem.is_main);
    }
  }, [currentItem]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        address_name: currentItem?.address_name || "",
        address: currentItem?.address || "",
        complement: currentItem?.complement || "",
        contact_number: currentItem?.contact_number || "",
        postal_code: currentItem?.postal_code || "",
        country: currentItem?.country.id ?? "",
        departament: currentItem?.departament?.id ?? "",
        city: currentItem?.city.id ?? "",
      }}
      validationSchema={CreateAddressSchema}
      onSubmit={(values) => {
        currentItem ? handleUpdateAddress(values) : handleCreateAddress(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        resetForm,
        handleSubmit,
        handleChange,
        setFieldTouched,
      }) => {
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
                  value={values.address_name}
                  error={!!touched.address_name && !!errors.address_name}
                  onBlur={() => setFieldTouched("address_name")}
                  onChange={handleChange("address_name")}
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
                  value={values.address}
                  error={!!touched.address && !!errors.address}
                  onBlur={() => setFieldTouched("address")}
                  onChange={handleChange("address")}
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
                  value={values.complement}
                  error={!!touched.complement && !!errors.complement}
                  onBlur={() => setFieldTouched("complement")}
                  onChange={handleChange("complement")}
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
                    value={values.contact_number}
                    error={!!touched.contact_number && !!errors.contact_number}
                    onBlur={() => setFieldTouched("contact_number")}
                    onChange={handleChange("contact_number")}
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
                    value={values.postal_code}
                    error={!!touched.postal_code && !!errors.postal_code}
                    onBlur={() => setFieldTouched("postal_code")}
                    onChange={handleChange("postal_code")}
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
                  {!isLoadingCountries && (
                    <TextField
                      select
                      value={values.country}
                      error={!!touched.country && !!errors.country}
                      onBlur={() => setFieldTouched("country")}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        handleChange(e);
                        setCountry(isNaN(value) ? null : value);
                      }}
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
                      {ParseCountriesData(DataCountries ?? []).map(
                        (country) => (
                          <MenuItem
                            key={`country-${country.id}`}
                            value={country.id}
                          >
                            {country.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  )}
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
                  {!isLoadingDepartaments && (
                    <TextField
                      select
                      value={values.departament}
                      error={!!touched.departament && !!errors.departament}
                      onBlur={() => setFieldTouched("departament")}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        handleChange(e);
                        setDepartament(isNaN(value) ? null : value);
                      }}
                      fullWidth
                      size="small"
                      name="departament"
                      disabled={
                        country === null || isLoadingDepartaments ? true : false
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "15px",
                          backgroundColor:
                            country === null ? "#CCC" : "#FFFFFF",
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
                      {ParseCountriesData(DataDepartaments ?? []).map(
                        (departament) => (
                          <MenuItem
                            key={`departament-${departament.id}`}
                            value={departament.id}
                          >
                            {departament.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  )}
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
                  {!isLoadingCities && (
                    <TextField
                      select
                      value={values.city}
                      error={!!touched.city && !!errors.city}
                      onBlur={() => setFieldTouched("city")}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      fullWidth
                      size="small"
                      name="city"
                      disabled={
                        departament === null || isLoadingCities ? true : false
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "15px",
                          backgroundColor:
                            departament === null ? "#CCC" : "#FFFFFF",
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
                      {ParseCountriesData(DataCities ?? []).map((city) => (
                        <MenuItem key={`city-${city.id}`} value={city.id}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Box>
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={isMain}
                    onChange={(e) => setIsMain(e.target.checked)}
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
              {isError ? (
                <span
                  style={{
                    fontSize: 16,
                    color: "red",
                  }}
                >
                  error
                </span>
              ) : null}
              {isLoading ? (
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
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setCurrentItem(null);
                      resetForm();
                      onBack();
                    }}
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
                    disabled={!isValid}
                    onClick={() => handleSubmit()}
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
              )}
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};

export default AddressesForm;
