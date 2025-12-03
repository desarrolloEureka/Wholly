import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { asyncSendApis } from "../../../globals/services/service";
import { ApiData } from "../../../globals/services/api";

const LoginFormHook = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [errorTerms, setErrorTerms] = useState(true);
    const [errorEmail, setErrorEmail] = useState(true);
    const [errorPassword, setErrorPassword] = useState(true);
    const [errorGeneral, setErrorGeneral] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const textError = {
        terms: t("loginForm.errorTerms"),
        email: t("loginForm.errorEmail"),
        password: t("loginForm.errorPassword"),
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    /* const handleLogin = () => {
        setIsLogged(true);
        if (!errorTerms && !errorEmail && !errorPassword) {
            setIsLogged(false);
        }
    }; */

    const handleLogin = async () => {
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorTerms(false);

        if (email.trim() !== "" && password.trim() !== "" && acceptedTerms) {

            setIsLogged(false);

            const data: ApiData = {
                method: 'POST',
                body: {
                    email: email,
                    username: email,
                    password: password
                }
            };

            try {
                const response = await asyncSendApis('/rest-auth/login/', data);
                if (response.status) {
                    await localStorage.setItem('Token', response.key);
                    navigate("/");
                } else {
                    setIsLogged(true);
                    setErrorGeneral(true)
                    console.log("Login failed:", response);
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                setIsLogged(true);
            }
        } else {
            if (email === "") setErrorEmail(true);
            if (password === "") setErrorPassword(true);
            if (!acceptedTerms) setErrorTerms(true);

            setIsLogged(true);
        }
    };

    return {
        showPassword,
        setShowPassword,
        password,
        setPassword,
        email,
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
        t,
        navigate,

        handleClickShowPassword,
        handleMouseDownPassword,
        handleMouseUpPassword,
        handleLogin,
        errorGeneral
    };
};

export default LoginFormHook;