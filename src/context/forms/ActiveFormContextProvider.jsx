import {useContext} from "react";
import {ProfileFormContext} from "./ProfileFormContext.jsx";
import {LoginFormContext} from "./LoginFormContext.jsx";
import {RegisterFormContext} from "./RegisterFormContext.jsx";

const getActiveContext = () => {
    const profileFormContext = useContext(ProfileFormContext);
    const loginFormContext = useContext(LoginFormContext);
    const registerFormContext = useContext(RegisterFormContext);

    if (profileFormContext) {
        return profileFormContext;
    }
    if (loginFormContext) {
        return {formData: loginFormContext.loginFormData, setFormData: loginFormContext.setLoginFormData};
    }
    if (registerFormContext) {
        return {formData: registerFormContext.registerFormData, setFormData: registerFormContext.setRegisterFormData};
    }
}

export {getActiveContext};
