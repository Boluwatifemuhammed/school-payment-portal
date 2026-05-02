const fullName = document.getElementById("fullname");
const admissionNo = document.getElementById("admission-input");
const classInput = document.getElementById("class");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");

function validateInputs(event) {
    console.log("Now running");

    errorMsg.textContent = "";
    errorMsg.style.display = "block";

    if (
        fullName.value.trim() === "" ||
        admissionNo.value.trim() === "" ||
        classInput.value.trim() === ""
    ) {
        errorMsg.textContent = "⚠️ Please fill all blanks.";

        // stop navigation to payment.html
        event.preventDefault();
    } else {
        errorMsg.style.display = "none";
        console.log("✅ All inputs filled, continue to next page...");
        
        
    }

    localStorage.setItem("fullname", fullName.value.trim());
    localStorage.setItem("admission-input", admissionNo.value.trim());
    localStorage.setItem("class", classInput.value.trim());

}

submitBtn.addEventListener("click", validateInputs);



