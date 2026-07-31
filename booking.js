emailjs.init("5-V34nBx-Tpjnm3GR");

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;

    // 1. Send confirmation email to customer
    emailjs.sendForm(
        "service_7sxl0xq",
        "template_8uay0lh",
        form
    )
    .then(function() {

        // 2. Send booking details to admin
        return emailjs.sendForm(
            "service_7sxl0xq",
            "template_5efqyld",
            form
        );

    })
    .then(function() {

    const message =
`🐾 *New Booking*

Customer: ${form.Customer_Name.value}
Phone: ${form.Phone_Number.value}
Email: ${form.Email.value}
Pet: ${form.Pet_Name.value}
Age: ${form.Pet_Age.value}
Breed: ${form.Breed.value}
Service: ${form.Service.value}
Date: ${form.Appointment_Date.value}
Notes: ${form.Message.value}`;

    const whatsappURL =
`https://wa.me/919445437069?text=${encodeURIComponent(message)}`;

    localStorage.setItem("whatsappURL", whatsappURL);

    form.reset();

    window.location.href = "success.html";

})

    .catch(function(error) {

        console.log(error);
        alert("Booking Failed: " + JSON.stringify(error));

    });

});