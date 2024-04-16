const passTxt = document.querySelector("#password");
const passConfirmTxt = document.querySelector("#confirmPassword");
const requirementLabels = document.querySelectorAll("#passwordRequirements li");

passConfirmTxt.addEventListener("change", (e) => {
  if (passTxt.value !== passConfirmTxt.value) {
    passConfirmTxt.setCustomValidity(
      "Password not matching. Please try again."
    );
  } else {
    passConfirmTxt.setCustomValidity("");
  }
});

passTxt.addEventListener("input", function () {
  const password = this.value;

  // Check each requirement and update the corresponding label
  requirementLabels.forEach((label) => {
    const requirement = label.id;
    const regex = getRegexForRequirement(requirement);
    const isRequirementMet = regex.test(password);

    if (isRequirementMet) {
      label.classList.add("met");
    } else {
      label.classList.remove("met");
    }
  });
});

// Function to return the regex pattern for each requirement
function getRegexForRequirement(requirement) {
  switch (requirement) {
    case "lowercase":
      return /[a-z]/;
    case "uppercase":
      return /[A-Z]/;
    case "number":
      return /\d/;
    case "special":
      return /[!@#$%^&*_=\-[\]{}();:',."<>/?\\`~]/;
    case "length":
      return /^.{8,25}$/;
  }
}
