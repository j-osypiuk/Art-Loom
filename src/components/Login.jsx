import { useState, useEffect } from "react";

// const colors = ['--clr-red-dark', '--clr-green-dark', '--clr-blue-dark', '--clr-yellow-dark', '--clr-purple-dark']

const Login = () => {
  // const [loginValue, setLoginValue] = useState("");
  // const [pswdValue, setPswdValue] = useState("");
  // const [quoteWrapBgColor, setQuoteWrapBgColor] = useState("");

  const handleInputFocus = (event) => {
    event.target.classList = "cmp-login__input cmp-login__input--focused";
  };

  const handleInputBlur = (event) => {
    if (event.target.value !== "") return;
    event.target.classList = "cmp-login__input";
  };

  // useEffect(() => {
  //   const colorIndex = Math.floor(Math.random() * colors.length);
  //   console.log(colors[colorIndex] + " -> " + colorIndex);
  //   console.log(`var(${colors[colorIndex]})`)
  //   setQuoteWrapBgColor(`var(${colors[colorIndex]})`);
  // }, [])

  return (
    <div className="cmp-login">
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
          Log in to your account or <a className="cmp-login__sign-in" href="#">sign in</a>
        </p>
        <form method="post" className="cmp-login__form" autoComplete="off">
          <label htmlFor="login" className="cmp-login__input-label">
            Login:
          </label>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            type="text"
            name="login"
            id="login"
            className="cmp-login__input"
          />
          <label htmlFor="password" className="cmp-login__input-label">
            Password:
          </label>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            type="password"
            id="password"
            name="password"
            className="cmp-login__input"
          />
          <div className="cmp-login__btn-wrap">
            <button type="submit" className="cmp-login__button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
