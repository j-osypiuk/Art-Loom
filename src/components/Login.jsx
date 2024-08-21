import { useState, useEffect } from "react";
import FormInput from "./FormInput.jsx";

// const colors = ['--clr-red-dark', '--clr-green-dark', '--clr-blue-dark', '--clr-yellow-dark', '--clr-purple-dark']

const Login = () => {
  // const [loginValue, setLoginValue] = useState("");
  // const [pswdValue, setPswdValue] = useState("");
  // const [quoteWrapBgColor, setQuoteWrapBgColor] = useState("");
  const [artForms, setArtForms] = useState(["Music", "Painting", "Drawing", "Sculpture", "Digital Art", "Photography", "Writing", "Film Making", "Dance"]);

  // useEffect(() => {
  //   const colorIndex = Math.floor(Math.random() * colors.length);
  //   console.log(colors[colorIndex] + " -> " + colorIndex);
  //   console.log(`var(${colors[colorIndex]})`)
  //   setQuoteWrapBgColor(`var(${colors[colorIndex]})`);
  // }, [])

  const changeFormMode = (event) => {
    const formWrap = document.querySelector(`.cmp-login`);
    formWrap.classList.toggle("sign-up-mode");
  }

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
            <form method="post" className="cmp-login__sign-in-form" autoComplete="off">
              <FormInput inputName="login" label="Login" type="text"/>
              <FormInput inputName="password" label="Password" type="password"/>
              <div className="cmp-login__btn-wrap">
                <button type="submit" className="cmp-login__button">
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
            <form method="post" className="cmp-login__sign-in-form" autoComplete="off">
              <div className="cmp-login__input-wrap">
                <div className="cmp-login__input-col">
                  <FormInput inputName="firstName" label="First Name" type="text"/>
                  <FormInput inputName="lastName" label="Last Name" type="text"/>
                  <FormInput inputName="email" label="Email" type="email"/>
                  <FormInput inputName="phoneNumber" label="Phone Number" type="text"/>
                </div>
                <div className="cmp-login__input-col">
                  <FormInput inputName="nickname" label="Nickname" type="text"/>
                  <FormInput inputName="newPassword" label="Password" type="password"/>
                  <FormInput inputName="confirmPassword" label="Confirm Password" type="password"/>
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
                <button type="submit" className="cmp-login__button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
  );
};

export default Login;
