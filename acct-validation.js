const acctHolder = document.getElementById("acctHolder");
const whatsAppNo = document.getElementById("WhatsAppNo");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");

function validateInputs() {
    console.log("Now running");

    // clear old error
    errorMsg.textContent = "";
    errorMsg.style.display = "block";

    if (
        acctHolder.value.trim() === "" ||
        whatsAppNo.value.trim() === "" 
    ) {
        errorMsg.textContent = "⚠️ Please fill all blanks.";

        // // stop navigation to payment.html
        event.preventDefault();
    } else {
        errorMsg.style.display = "none";
        console.log("✅ All inputs filled, continue to next page...");
        // if you want to navigate to payment.html, allow <a> to work
    }
    localStorage.setItem("acctHolder", acctHolder.value.trim());
    localStorage.setItem("WhatsAppNo", whatsAppNo.value.trim());
}

submitBtn.addEventListener("click", validateInputs);
