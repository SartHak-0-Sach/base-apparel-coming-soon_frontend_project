const signUpForm = document.querySelector("#sign-up-form");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");

signUpForm.noValidate = true;

emailInput.addEventListener("input", (event) => {
    if (!emailInput.validity.valueMissing && !emailInput.validity.patternMismatch) {
        emailInput.setAttribute("aria-invalid", false);
        emailError.textContent = "";
    }
});

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (emailInput.validity.valueMissing || emailInput.validity.patternMismatch) {
        emailInput.setAttribute("aria-invalid", true);
        emailError.textContent = "Please provide a valid email";
        emailInput.focus();
        return;
    };

    try {
        alert("Thanks for subscribing!");

        emailInput.setAttribute("aria-invalid", false);
        emailError.textContent = "";
    } catch (e) {
        alert("Oops! Something went wrong. Please try again later.");
    }
});