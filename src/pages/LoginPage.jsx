import {useEffect, useRef, useState} from "react";
import TextInput from "../components/TextInput.jsx";
import {LoginFormContext} from "../context/forms/LoginFormContext.jsx";
import {RegisterFormContext} from "../context/forms/RegisterFormContext.jsx";
import {formatTextInputs} from "../utils/forms/FormUtils.js";

const LoginPage = () => {
  const formWrapRef = useRef(null);
  const [loginFormData, setLoginFormData] = useState({
    textInputs:[
      {
        name: "login",
        label: "Login",
        type: "text",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "Login is required field.",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "Password is required field.",
      }
    ]
  })

  const [registerFormData, setRegisterFormData] = useState({
    textInputs: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "First Name is required field.",
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "Last Name is required field.",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        value: "",
        isValid: true,
        required: true,
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        isRegexValid: true,
        displayErrorMsg: "Email is required field.",
        regexErrorMsg: "Please enter a valid email address.",
      },
      {
        name: "confirmEmail",
        label: "Confirm Email",
        type: "email",
        value: "",
        isValid: true,
        required: true,
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        isRegexValid: true,
        displayErrorMsg: "Last Name is required field.",
        regexErrorMsg: "Please enter a valid email address.",
      },
      {
        name: "nickname",
        label: "Nickname",
        type: "text",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "Nickname is required field.",
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "text",
        value: "",
        isValid: true,
        required: true,
        displayErrorMsg: "Phone Number is required field.",
      },
      {
        name: "newPassword",
        label: "Password",
        type: "password",
        value: "",
        isValid: true,
        required: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        isRegexValid: true,
        displayErrorMsg: "Password is required field.",
        regexErrorMsg: "Password must include upper/lowercase, digits, and special characters."
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        value: "",
        isValid: true,
        required: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        isRegexValid: true,
        displayErrorMsg: "Confirm Password is required field.",
        regexErrorMsg: "Password must include upper/lowercase, digits, and special characters."
      },
    ]
  });

  // Validate email match
  useEffect(() => {
    if (registerFormData.textInputs[2].value && registerFormData.textInputs[2].isRegexValid &&
        registerFormData.textInputs[3].value && registerFormData.textInputs[3].isRegexValid) {
      if (registerFormData.textInputs[2].value !== registerFormData.textInputs[3].value) {
        updateRegisterFormData("email", "isValid", false);
        updateRegisterFormData("email", "displayErrorMsg", "Mails do not match.");
        updateRegisterFormData("confirmEmail", "isValid", false);
        updateRegisterFormData("confirmEmail", "displayErrorMsg", "Mails do not match.");
      } else {
        updateRegisterFormData("email", "isValid", true);
        updateRegisterFormData("confirmEmail", "isValid", true);
      }
    }
  }, [registerFormData.textInputs[2].value, registerFormData.textInputs[3].value]);

  useEffect(() => {
    if (registerFormData.textInputs[6].value && registerFormData.textInputs[6].isRegexValid &&
        registerFormData.textInputs[7].value && registerFormData.textInputs[7].isRegexValid) {
      if (registerFormData.textInputs[6].value !== registerFormData.textInputs[7].value) {
        updateRegisterFormData("newPassword", "isValid", false);
        updateRegisterFormData("newPassword", "displayErrorMsg", "Passwords do not match.");
        updateRegisterFormData("confirmPassword", "isValid", false);
        updateRegisterFormData("confirmPassword", "displayErrorMsg", "Passwords do not match.");
      } else {
        updateRegisterFormData("newPassword", "isValid", true);
        updateRegisterFormData("confirmPassword", "isValid", true);
      }
    }
  }, [registerFormData.textInputs[6].value, registerFormData.textInputs[7].value]);

  const updateRegisterFormData = (inputName, propertyName, propertyValue)  => {
    setRegisterFormData(prevData => ({
      ...prevData,
      textInputs: prevData.textInputs.map((input) =>
          input.name === inputName ? {...input, [propertyName]: propertyValue} : input
      )
    }));
  }

  const updateLoginFormData = (inputName, propertyName, propertyValue)  => {
    setLoginFormData(prevData => ({
      ...prevData,
      textInputs: prevData.textInputs.map((input) =>
          input.name === inputName ? {...input, [propertyName]: propertyValue} : input
      )
    }));
  }

  const changeFormMode = () => {
    formWrapRef.current.classList.toggle("cmp-login--sign-up-mode");
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    let validFormData = true;
    for(let input of loginFormData.textInputs) {
      if (!input.value) {
        updateLoginFormData(input.name, "isValid", false);
        validFormData = false;
      }
    }

    if (validFormData) {
      let responseObj = {
        ...formatTextInputs(loginFormData.textInputs)
      };
      console.log(responseObj);
    }
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    let validFormData = true;
    for(let input of registerFormData.textInputs) {
      if (!input.value) {
        updateRegisterFormData(input.name, "isValid", false);
        validFormData = false;
      }
    }

    if (validFormData) {
      let responseObj = {
        ...formatTextInputs(registerFormData.textInputs.filter((_, i) => i !== 3 && i !== 7))
      };
      console.log(responseObj);
    }
  }

  return (
      <main className="cmp-login__container">
        <div ref={formWrapRef} className="cmp-login">
          <div className="cmp-login__quote-wrap">
            <div>
              <blockquote className="cmp-login__quote">
                <i>„Have no fear of perfection, you will never reach it.”</i>
              </blockquote>
              <p className="cmp-login__author"><strong>- Salvador Dali</strong></p>
            </div>
          </div>
          <div className="cmp-login__sign-in-wrap">
            <h1 className="cmp-login__header">Welcome back</h1>
            <p className="cmp-login__info">
              Not registered yet? <a className="cmp-login__sign-up" onClick={changeFormMode} href="#">sign up</a>
            </p>
            <LoginFormContext.Provider value={{loginFormData, setLoginFormData}}>
              <form method="post" className="cmp-login__form" autoComplete="off">
                {
                  loginFormData.textInputs.map((inputData, index) => <TextInput key={index} index={index}/>)
                }
                <div className="cmp-login__btn-wrap">
                  <button type="submit" className="cmp-login__button" onClick={handleLoginSubmit}>
                    Sign in
                  </button>
                </div>
              </form>
            </LoginFormContext.Provider>
          </div>
          <div className="cmp-login__sign-up-wrap">
            <h1 className="cmp-login__header">Create Account</h1>
            <p className="cmp-login__info">
              Already have account? <a className="cmp-login__sign-up" onClick={changeFormMode} href="#">sign in</a>
            </p>
            <RegisterFormContext.Provider value={{registerFormData, setRegisterFormData}}>
              <form method="post" className="cmp-login__form" autoComplete="off">
                <div className="cmp-login__input-wrap">
                  <div className="cmp-login__input-col">
                    {
                      registerFormData.textInputs.slice(0, 4).map((inputData, index) => <TextInput key={index} index={index}/>)
                    }
                  </div>
                  <div className="cmp-login__input-col">
                    {
                      registerFormData.textInputs.slice(4).map((inputData, index) => <TextInput key={index + 4} index={index + 4}/>)
                    }
                  </div>
                </div>
                <div className="cmp-login__btn-wrap">
                  <button type="submit" className="cmp-login__button" onClick={handleRegisterSubmit}>
                    Sign up
                  </button>
                </div>
              </form>
            </RegisterFormContext.Provider>
          </div>
        </div>
      </main>
  );
};

export default LoginPage;
