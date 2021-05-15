export const AddProductEvents = () => {
  // Add Product Page
  let AddProductDonePopUp = document.querySelector(".AddProductDonePopUp");
  let AddProductButton = document.querySelector(".submit-button");
  let CloseIconAddProduct = document.querySelector(
    ".close-icon-add-product-popup"
  );
  let App = document.querySelector(".App");
  let AppFrontWrapper = document.querySelector(".AppFrontWrapper");
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
  CloseIconAddProduct.addEventListener("click", (e) =>
    HideAuthForm(e, AddProductDonePopUp)
  );
  AddProductButton.addEventListener("click", (e) =>
    ShowAuthForm(e, AddProductDonePopUp)
  );
};
