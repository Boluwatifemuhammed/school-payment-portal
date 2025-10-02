// const fullName = document.getElementById("fullname");
// const admissionNo = document.getElementById("admission-input");
// const classInput = document.getElementById("class");
// const submitBtn = document.getElementById("submit-btn");
// const errorMsg = document.getElementById("error-msg");

// // console.log(submitBtn);

// function validateInputs() {
//     console.log("Now running")
//     errorMsg.textContent = "";

//     if (fullName.value() === "" ||
//         admissionNo.value() === "" ||
//         classInput.value() === ""
//     ) {
//        errorMsg.textContent = "All inputs are required";
//     } 
    
// }

// submitBtn.addEventListener("click", validateInputs);


const fullName = document.getElementById("fullname");
const admissionNo = document.getElementById("admission-input");
const classInput = document.getElementById("class");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");

function validateInputs(event) {
    console.log("Now running");

    // clear old error
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
        // if you want to navigate to payment.html, allow <a> to work
    }

    localStorage.setItem("fullname", fullName.value.trim());
    localStorage.setItem("admission-input", admissionNo.value.trim());
    localStorage.setItem("class", classInput.value.trim());

    // window.location.href= "verifydetails.html"  ;
}

submitBtn.addEventListener("click", validateInputs);
