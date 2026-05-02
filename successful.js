document.getElementById("acctHolder").textContent =
    localStorage.getItem("acctHolder");

document.getElementById("WhatsAppNo").textContent =
    localStorage.getItem("WhatsAppNo");

document.getElementById("submit-btn").addEventListener("click", async () => {

    const payload = {
        fullname: localStorage.getItem("fullname"),
        admission: localStorage.getItem("admission"),
        class: localStorage.getItem("class"),
        acctHolder: localStorage.getItem("acctHolder"),
        WhatsAppNo: localStorage.getItem("WhatsAppNo"),
        amount: 1500
    };

    try {
        const response = await fetch("http://localhost:5000/send-payment-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.status === "success") {
          
            alert("Payment confirmed. Email sent to school.");
            localStorage.clear();
            window.location.href = "index.html";
        } else {
            alert("Failed to send email.");
        }

    } catch (err) {
        alert("Error sending email.");
        console.log(err);
    }
});

