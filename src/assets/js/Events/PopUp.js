export const HandleSigninPopUp = () => {
  let SignInButtons = document.querySelectorAll(".sign-in-button");
  let App = document.querySelector(".App");
  let AppFrontWrapper = document.querySelector(".AppFrontWrapper");
  let HomeSignInWrapper = document.querySelector(".home-sign-in-wrapper");
  let LoginOptions = document.querySelectorAll(".login-option");
  let HomeLogInWrapper = document.querySelector(".home-login-wrapper");
  let LoginBackButton = document.querySelector(".login-back-btn");
  let SearchButton = document.querySelector(".search-header-icon");
  let HomeSearchWrapper = document.querySelector(".home-search-wrapper");

  function ShowAuthForm(e, AuthWrapper) {
    e.preventDefault();
    AppFrontWrapper.style.height = `${App.offsetHeight + 60}px`;

    AuthWrapper.style.display = `flex`;
  }
  function HideAuthForm(e, AuthWrapper) {
    e.preventDefault();
    AppFrontWrapper.style.height = `${0}px`;

    AuthWrapper.style.display = `none`;
  }

  SignInButtons.forEach((SignInButton) => {
    SignInButton.addEventListener("click", (e) =>
      ShowAuthForm(e, HomeSignInWrapper)
    );
  });

  LoginOptions.forEach((LoginOption) => {
    LoginOption.addEventListener("click", (e) =>
      ShowAuthForm(e, HomeLogInWrapper)
    );
  });

  LoginBackButton.addEventListener("click", (e) =>
    HideAuthForm(e, HomeLogInWrapper)
  );

  SearchButton.addEventListener("click", (e) =>
    ShowAuthForm(e, HomeSearchWrapper)
  );
};
