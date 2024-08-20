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
      <main className="cmp-login">
        <div className="cmp-login__quote-wrap">
          <div>
            <blockquote className="cmp-login__quote">
              <i>„Have no fear of perfection, you will never reach it.”</i>
            </blockquote>
            <p className="cmp-login__author"><strong>- Salvador Dali</strong></p>
          </div>
        </div>
        <div className="cmp-login__form-wrap">
          <h1 className="cmp-login__header">Welcome back</h1>
          <p className="cmp-login__info">
            Not registered yet? <a className="cmp-login__sign-in" onClick={changeFormMode} href="#">sign up</a>
          </p>
          <form method="post" className="cmp-login__sing-in-form" autoComplete="off">
            <FormInput inputName="login" label="Login" type="text"/>
            <FormInput inputName="password" label="Password" type="password"/>
            <div className="cmp-login__btn-wrap">
              <button type="submit" className="cmp-login__button">
                Login
              </button>
            </div>
          </form>
        </div>


        {/*<div className="cmp-login__sign-up-wrap">*/}
        {/*  <h1 className="cmp-login__header">Create your account</h1>*/}
        {/*  <p className="cmp-login__info">*/}
        {/*    You already have an account? <a className="cmp-login__sign-in" href="#">log in</a>*/}
        {/*  </p>*/}
        {/*  <form method="post" className="cmp_login__sign-up-form" autoComplete="off">*/}
        {/*    <div className="cmp_login__input-wrap">*/}
        {/*      <div className="cmp-login__form_col">*/}
        {/*        <div className="input-wrap">*/}
        {/*          <label htmlFor="firstName" className="cmp-login__input-label">*/}
        {/*            First Name:*/}
        {/*          </label>*/}
        {/*          <input*/}
        {/*              onFocus={handleInputFocus}*/}
        {/*              onBlur={handleInputBlur}*/}
        {/*              type="text"*/}
        {/*              name="firstName"*/}
        {/*              id="firstName"*/}
        {/*              className="cmp-login__input"*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <label htmlFor="lastName" className="cmp-login__input-label">*/}
        {/*          Last Name:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="text"*/}
        {/*            name="lastName"*/}
        {/*            id="lastName"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*        <label htmlFor="email" className="cmp-login__input-label">*/}
        {/*          Email:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="email"*/}
        {/*            id="email"*/}
        {/*            name="email"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*        <label htmlFor="phone" className="cmp-login__input-label">*/}
        {/*          Phone Number:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="text"*/}
        {/*            id="phone"*/}
        {/*            name="phone"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="cmp-login__form_col">*/}
        {/*        <label htmlFor="nickname" className="cmp-login__input-label">*/}
        {/*          Nickname:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="text"*/}
        {/*            name="nickname"*/}
        {/*            id="nickname"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*        <label htmlFor="password" className="cmp-login__input-label">*/}
        {/*          Password:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="password"*/}
        {/*            id="password"*/}
        {/*            name="password"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*        <label htmlFor="confirmPassword" className="cmp-login__input-label">*/}
        {/*          Confirm Password:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*            onBlur={handleInputBlur}*/}
        {/*            type="password"*/}
        {/*            id="confirmPassword"*/}
        {/*            name="password"*/}
        {/*            className="cmp-login__input"*/}
        {/*        />*/}
        {/*        <label htmlFor="artType" className="cmp-login__input-label">*/}
        {/*          Art Form:*/}
        {/*        </label>*/}
        {/*        <select id="artType" className="cmp-login__select">*/}
        {/*          <option value="">Select an Art Form</option>*/}
        {/*          {*/}
        {/*            artForms.map((art) => (*/}
        {/*                <option key={art} value={art} className="cmp-login__select-option">{art}</option>*/}
        {/*            ))*/}
        {/*          }*/}
        {/*        </select>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="cmp-login__btn-wrap">*/}
        {/*      <button type="submit" className="cmp-login__button">*/}
        {/*        Login*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </main>
  );
};

export default Login;
