import { useState } from "react";
import FormInput from "./FormInput.jsx";

const WelcomeForm = () => {
  const [artForms, setArtForms] = useState(["Music", "Painting", "Drawing", "Sculpture", "Digital Art", "Photography", "Writing", "Film Making", "Dance"]);
  const [loginData, setLoginData] = useState([
    {
      name: "login",
      label: "Login",
      type: "text",
      value: "",
      isValid: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: "",
      isValid: true,
    }
  ]);

  const [registerData, setRegisterData] = useState([
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      value: "",
      isValid: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      value: "",
      isValid: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      value: "",
      isValid: true,
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      value: "",
      isValid: true,
    },
    {
      name: "nickname",
      label: "Nickname",
      type: "text",
      value: "",
      isValid: true,
    },
    {
      name: "newPassword",
      label: "Password",
      type: "password",
      value: "",
      isValid: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      value: "",
      isValid: true,
    },
  ]);

  const changeFormMode = () => {
    const formWrap = document.querySelector(`.cmp-login`);
    formWrap.classList.toggle("cmp-login--sign-up-mode");
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setLoginData(loginData.map(validateInput));
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setRegisterData(registerData.map(validateInput));
  }

  const handleLoginInputChange = (updatedInput) => {
    const updatedLoginData = loginData.map((inputItem) => updateInputData(inputItem, updatedInput));
    setLoginData(updatedLoginData)
  }

  const handleRegisterInputChange = (updatedInput) => {
    const updatedRegisterData = registerData.map((inputItem) => updateInputData(inputItem, updatedInput));
    setRegisterData(updatedRegisterData)
  }

  const validateInput = (inputItem) => {
    return inputItem.value !== "" ? { ...inputItem, isValid: true } : { ...inputItem, isValid: false };
  }

  const updateInputData = (inputItem, inputData) => {
    if (inputItem.name === inputData.name) {
      return inputItem.value !== "" ? { ...inputData, value: inputData.value, isValid: true } : { ...inputData, value: inputData.value, isValid: true };
    }
    return inputItem;
  };

  return (
      <main className="cmp-login__container">
        <div className="cmp-login">
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
            <form method="post" className="cmp-login__form" autoComplete="off">
              {
                loginData.map((inputData) => {
                    return (
                        <FormInput key={inputData.name} props={inputData} handleInputChange={handleLoginInputChange}/>
                    )
                })
              }
              <div className="cmp-login__btn-wrap">
                <button type="submit" className="cmp-login__button" onClick={handleLoginSubmit}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="cmp-login__sign-up-wrap">
            <h1 className="cmp-login__header">Create Account</h1>
            <p className="cmp-login__info">
              Already have account? <a className="cmp-login__sign-up" onClick={changeFormMode} href="#">sign in</a>
            </p>
            <form method="post" className="cmp-login__form" autoComplete="off">
              <div className="cmp-login__input-wrap">
                <div className="cmp-login__input-col">
                  {
                    registerData.slice(0, 4).map((inputData) => {
                      return (
                          <FormInput key={inputData.name} props={inputData} handleInputChange={handleRegisterInputChange}/>
                      )
                    })
                  }
                </div>
                <div className="cmp-login__input-col">
                  {
                    registerData.slice(4).map((inputData) => {
                      return (
                          <FormInput key={inputData.name} props={inputData} handleInputChange={handleRegisterInputChange}/>
                      )
                    })
                  }
                  <select className="artField" id="artField" name="artField">
                    <option value="Painting">Painting</option>
                    <option value="Music">Music</option>
                    <option value="Sculpture">Sculpture</option>
                    <option value="Dance">Dance</option>
                    <option value="Writing">Writing</option>
                  </select>
                </div>
              </div>
              <div className="cmp-login__btn-wrap">
                <button type="submit" className="cmp-login__button" onClick={handleRegisterSubmit}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
  );
};

export default WelcomeForm;
