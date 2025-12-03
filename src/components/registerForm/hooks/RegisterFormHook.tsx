import { SetStateAction, useEffect, useImperativeHandle, useState } from "react";
import { useTranslation } from "react-i18next";
import ErrorLabel from "../../errorLabel/ErrorLabel";
import { asyncSendApis } from "../../../globals/services/service";
import { ApiData } from "../../../globals/services/api";
import { useTheme } from "@mui/material";
import { OptionsButtons } from "../../../globals/types";
import { useNavigate } from "react-router-dom";

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

const RegisterFormHook = (ref?: any) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [date1, setDate1] = useState(""); // Estado para el primer grupo
    const [date2, setDate2] = useState(""); // Estado para el segundo grupo
    const [date3, setDate3] = useState(""); // Estado para el tercer grupo
    const [errors, setErrors] = useState(dataErrors);
    const [generalError, setGeneralError] = useState<React.ReactNode>("");
    const [idUser, setIdUser] = useState(0);

    /* Hooks Paso 2 */
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorMessageNoSelected, setErrorMessageNoSelected] = useState(false);
    const [isError, setIsError] = useState(false);
    const [options, setOptions] = useState<OptionsButtons[]>([]);
    const [conditions, setConditions] = useState<OptionsButtons[]>([]);
    const [allergies, setAllergies] = useState<OptionsButtons[]>([]);
    const [medicines, setMedicines] = useState<OptionsButtons[]>([]);
    const [diseases, setDiseases] = useState<OptionsButtons[]>([]);

    const [selectedTendencies, setSelectedTendencies] = useState<OptionsButtons[]>([]);
    const [selectedConditions, setSelectedConditions] = useState<OptionsButtons[]>([]);
    const [selectedAllergies, setSelectedAllergies] = useState<OptionsButtons[]>([]);
    const [selectedMedicines, setSelectedMedicines] = useState<OptionsButtons[]>([]);
    const [selectedDiseases, setSelectedDiseases] = useState<OptionsButtons[]>([]);

    const [customTendency, setCustomTendency] = useState("");

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

    const handleChange1 = (event: { target: { value: SetStateAction<string> }; }) => {
        setDate1(event.target.value); // Actualiza el estado para el primer grupo
    };

    const handleChange2 = (event: { target: { value: SetStateAction<string> }; }) => {
        setDate2(event.target.value); // Actualiza el estado para el segundo grupo
    };

    const handleChange3 = (event: { target: { value: SetStateAction<string> }; }) => {
        setDate3(event.target.value); // Actualiza el estado para el tercer grupo
    };

    const validateForm = () => {
        const newErrors = {
            name: !name?.trim(),
            email: !email?.trim(),
            confirmEmail: !confirmEmail?.trim(),
            password: !password?.trim(),
            confirmPassword: !confirmPassword?.trim(),
            lastName: !lastName?.trim(),
            dateOfBirth: !dateOfBirth,
            biologicalSex: !date1,
            gender: !date2,
            optionsList: !date3,
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

    useImperativeHandle(ref, () => ({
        validateForm,
    }));

    const handleRegisterUser = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        const isValid = validateForm();
        if (!isValid) return;

        try {
            const data: ApiData = {
                method: 'POST',
                body: {
                    user: {
                        first_name: name.trim(),
                        last_name: lastName.trim(),
                        username: email.trim(),
                        email: email.trim(),
                        password,
                        repeat_password: confirmPassword,
                    },
                    birthday: dateOfBirth,
                    gender: parseInt(date2, 10),
                    called: parseInt(date3, 10),
                    biological_sex: parseInt(date1, 10),
                    state: 1,
                },
            };
            const response = await asyncSendApis('/profiles/apiClientRegister', data);
            if (response.status) {
                await localStorage.setItem('Token', response.key);
                setIdUser(response.client_id);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                setGeneralError(<ErrorLabel text={t("Error al registrar el usuario")} />);
                console.log("Error en el registro:", response);
            }
        } catch (error) {
            console.error("Error:", error);
            setGeneralError(<ErrorLabel text={t("Hubo un problema con el registro")} />);
        }
    };

    /* Logica Paso 2 */
    const getDataTendency = async () => {
        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'GET',
            };

            const response = await asyncSendApis('/ingredients/apiTendency', data);

            if (response.status) {
                const fetchedOptions: any = response;
                setOptions(fetchedOptions);
            } else {
                console.log("Error en la respuesta:", response);
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

    const handleAddCustomTendency = async () => {
        const trimmed = customTendency.trim();
        if (!trimmed) return;

        const alreadyExists = selectedTendencies.some(
            (item) => item.name_spanish.toLowerCase() === trimmed.toLowerCase()
        );

        if (alreadyExists) return;

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: {
                    name: trimmed,
                    lang: lang || "es"
                },
            };

            const response = await asyncSendApis('/ingredients/apiOtherTendency/', data);

            if (response.status) {
                const newTendency: any = {
                    id: Date.now(),
                    name_spanish: trimmed,
                };

                setOptions((prev) => [...prev, newTendency]);
                //setSelectedTendencies((prev) => [...prev, newTendency]);
                setCustomTendency("");
            } else {
                console.log("Error al guardar la tendencia:", response);
            }
        } catch (error) {
            console.error("Error de conexión al guardar tendencia:", error);
        }
    };

    const registerSelectedTendencies = async () => {
        if (!selectedTendencies || selectedTendencies.length === 0) {
            setErrorMessageNoSelected(true);
            return;
        }

        const selectedData = selectedTendencies.map((tendency) => ({
            tendency: tendency.id,
            client: idUser,
        }));

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: selectedData,
            };

            const response = await asyncSendApis('/ingredients/apiTendencyClient', data);

            if (response.status) {
                console.log("Tendencias seleccionadas registradas correctamente:", response);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                console.log("Error al registrar las tendencias:", response);
                setErrorMessageNoSelected(false);
            }
        } catch (error) {
            console.error("Error registro tendencias:", error);
        }
    };

    const toggleTendencySelection = (tendency: OptionsButtons) => {
        const alreadySelected = selectedTendencies.some(item => item.id === tendency.id);

        if (alreadySelected) {
            setSelectedTendencies(prev =>
                prev.filter(item => item.id !== tendency.id)
            );
        } else {
            setSelectedTendencies(prev => [...prev, tendency]);
        }
    };

    /* Logica Paso 3 */
    const getDataConditions = async () => {
        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'GET',
            };

            const response = await asyncSendApis('/ingredients/apiCondition', data);

            if (response.status) {
                const fetchedOptions: any = response;
                setConditions(fetchedOptions);
            } else {
                console.log("Error en la respuesta:", response);
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

    const registerSelectedConditions = async () => {
        if (!selectedConditions || selectedConditions.length === 0) {
            setErrorMessageNoSelected(true);
            return;
        }

        const selectedData = selectedConditions.map((condition) => ({
            condition: condition.id,
            client: idUser,
        }));

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: selectedData,
            };

            const response = await asyncSendApis('/ingredients/apiConditionClient', data);

            if (response.status) {
                console.log("Condiciones seleccionadas registradas correctamente:", response);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                console.log("Error al registrar las condiciones:", response);
                setErrorMessageNoSelected(false);
            }
        } catch (error) {
            console.error("Error registro condiciones:", error);
        }
    };

    const toggleConditionSelection = (condition: OptionsButtons) => {
        const alreadySelected = selectedConditions.some(item => item.id === condition.id);
        if (alreadySelected) {
            setSelectedConditions(prev =>
                prev.filter(item => item.id !== condition.id)
            );
        } else {
            setSelectedConditions(prev => [...prev, condition]);
        }
    };

    /* Logica Paso 3 */

    /* Logica Paso 4 */
    const getDataAllergies = async () => {
        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'GET',
            };

            const response = await asyncSendApis('/ingredients/apiExcipientIngredient', data);

            if (response.status) {
                const fetchedOptions: any = response;
                setAllergies(fetchedOptions);
            } else {
                console.log("Error en la respuesta:", response);
            }
        } catch (error) {
            console.error("Error DataAllergies:", error);
        }
    };

    const registerSelectedAllergies = async () => {
        if (!selectedAllergies || selectedAllergies.length === 0) {
            setErrorMessageNoSelected(true);
            return;
        }

        const selectedData = selectedAllergies.map((allergy) => ({
            excipient_ingredient: allergy.id,
            client: idUser,
        }));

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: selectedData,
            };

            const response = await asyncSendApis('/ingredients/apiExcipientIngredientClient', data);

            if (response.status) {
                console.log("Alergias seleccionadas registradas correctamente:", response);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                console.log("Error al registrar las alergias:", response);
                setErrorMessageNoSelected(false);
            }

        } catch (error) {
            console.error("Error registro alergias:", error);
        }
    };

    const toggleAllergySelection = (allergy: OptionsButtons) => {
        const alreadySelected = selectedAllergies.some(item => item.id === allergy.id);

        if (alreadySelected) {
            setSelectedAllergies(prev =>
                prev.filter(item => item.id !== allergy.id)
            );
        } else {
            setSelectedAllergies(prev => [...prev, allergy]);
        }
    };

    /* Logica Paso 4 */

    /* Logica Paso 5 */
    const getDataMedicines = async () => {
        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'GET',
            };

            const response = await asyncSendApis('/ingredients/apiMedicine', data);

            if (response.status) {
                const fetchedOptions: any = response;
                setMedicines(fetchedOptions);
            } else {
                console.log("Error en la respuesta:", response);
            }
        } catch (error) {
            console.error("Error DataMedicines:", error);
        }
    };

    const registerSelectedMedicines = async () => {
        if (!selectedMedicines || selectedMedicines.length === 0) {
            setErrorMessageNoSelected(true);
            return;
        }

        const selectedData = selectedMedicines.map((medicine) => ({
            medicine: medicine.id,
            client: idUser,
        }));

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: selectedData,
            };

            const response = await asyncSendApis('/ingredients/apiMedicineClient/', data);

            if (response.status) {
                console.log("Medicinas seleccionadas registradas correctamente:", response);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                console.log("Error al registrar las medicinas:", response);
                setErrorMessageNoSelected(false);
            }
        } catch (error) {
            console.error("Error registro medicinas:", error);
        }
    };

    const toggleMedicineSelection = (medicine: OptionsButtons) => {
        const alreadySelected = selectedMedicines.some(item => item.id === medicine.id);

        if (alreadySelected) {
            setSelectedMedicines(prev =>
                prev.filter(item => item.id !== medicine.id)
            );
        } else {
            setSelectedMedicines(prev => [...prev, medicine]);
        }
    };

    /* Logica Paso 5 */

    /* Logica Paso 6 */
    const getDataDiseases = async () => {
        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'GET',
            };

            const response = await asyncSendApis('/ingredients/apiDisease', data);

            if (response.status) {
                const fetchedOptions: any = response;
                setDiseases(fetchedOptions);
            } else {
                console.log("Error en la respuesta:", response);
            }
        } catch (error) {
            console.error("Error DataDiseases:", error);
        }
    };

    const registerSelectedDiseases = async () => {
        if (!selectedDiseases || selectedDiseases.length === 0) {
            setErrorMessageNoSelected(true);
            return;
        }

        const selectedData = selectedDiseases.map((disease) => ({
            disease: disease.id,
            client: idUser,
        }));

        try {
            const data: ApiData = {
                token: await localStorage.getItem('Token'),
                method: 'POST',
                body: selectedData,
            };

            const response = await asyncSendApis('/ingredients/apiDiseaseClient/', data);

            if (response.status) {
                console.log("Medicinas seleccionadas registradas correctamente:", response);
                navigate("/");
            } else {
                console.log("Error al registrar las medicinas:", response);
                setErrorMessageNoSelected(false);
            }
        } catch (error) {
            console.error("Error registro medicinas:", error);
        }
    };

    const toggleDiseaseSelection = (disease: OptionsButtons) => {
        const alreadySelected = selectedDiseases.some(item => item.id === disease.id);

        if (alreadySelected) {
            setSelectedDiseases(prev =>
                prev.filter(item => item.id !== disease.id)
            );
        } else {
            setSelectedDiseases(prev => [...prev, disease]);
        }
    };
    /* Logica Paso 6 */

    const handleNext = async () => {
        if (activeStep === 0) {
            handleRegisterUser();
        } else if (activeStep === 1) {
            registerSelectedTendencies();
        } else if (activeStep === 2) {
            registerSelectedConditions();
        } else if (activeStep === 3) {
            registerSelectedAllergies();
        } else if (activeStep === 4) {
            registerSelectedMedicines()
        } else if (activeStep === 5) {
            registerSelectedDiseases();
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        setErrorMessageNoSelected(false);
        if (activeStep === 1) {
            getDataTendency();
        } else if (activeStep === 2) {
            getDataConditions();
        } else if (activeStep === 3) {
            getDataAllergies();
        } else if (activeStep === 4) {
            getDataMedicines();
        } else if (activeStep === 5) {
            getDataDiseases();
        }
    }, [activeStep]);

    return {
        t,
        navigate,
        name,
        setName,
        email,
        setEmail,
        confirmEmail,
        setConfirmEmail,
        lastName,
        setLastName,
        dateOfBirth,
        setDateOfBirth,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        confirmPassword,
        setConfirmPassword,
        date1,
        setDate1,
        date2,
        setDate2,
        date3,
        setDate3,
        errors,
        setErrors,
        generalError,
        setGeneralError,
        handleClickShowPassword,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleChange1,
        handleChange2,
        handleChange3,
        validateForm,
        handleRegisterUser,
        theme,
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        idUser,
        //Paso 2
        searchTerm,
        setSearchTerm,
        errorMessage,
        setErrorMessage,
        errorMessageNoSelected,
        setErrorMessageNoSelected,
        isError,
        setIsError,
        options,
        setOptions,
        conditions,
        setConditions,
        selectedTendencies,
        setSelectedTendencies,
        customTendency,
        setCustomTendency,
        getDataTendency,
        handleAddCustomTendency,
        toggleTendencySelection,
        selectedConditions,
        toggleConditionSelection,
        allergies,
        selectedAllergies,
        toggleAllergySelection,
        medicines,
        selectedMedicines,
        toggleMedicineSelection,
        diseases,
        selectedDiseases,
        toggleDiseaseSelection,
    };
};

export default RegisterFormHook;