const passTxt = document.querySelector("#password");
const passConfirmTxt = document.querySelector("#confirmPassword");

passConfirmTxt.addEventListener("change", (e) => {
  if (passTxt.value !== passConfirmTxt.value) {
    passConfirmTxt.setCustomValidity(
      "Password not matching. Please try again."
    );
  } else {
    passConfirmTxt.setCustomValidity("");
  }
});
