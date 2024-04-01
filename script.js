const formWrapperEle = document.querySelector(".form-wrapper");
const emailInputEle = document.querySelector(".email-input");
console.log(emailInputEle);

const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

const submitHandler = (event) => {
  event.preventDefault();
  const userInput = emailInputEle.value;

  formWrapperEle.classList.remove("error");
  formWrapperEle.classList.remove("success");

  if (!emailReg.test(userInput)) {
    void formWrapperEle.offsetWidth;
    formWrapperEle.classList.add("error");
    return;
  } else {
    void formWrapperEle.offsetWidth;
    formWrapperEle.classList.add("success");
    emailInputEle.value = "";
  }
};

const submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", submitHandler);