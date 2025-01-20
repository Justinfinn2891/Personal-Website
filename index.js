emailjs.init("WbJxHQjxdIE70RT8EXUrl");  // Use your actual User ID

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the input values
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;

    // Prepare the email data
    const emailData = {
        email: email,
        reason: reason
    };

    // Send the email
    emailjs.send("service_cfef6s7", "template_z3elp5o", emailData)
        .then(function(response) {
            alert("Your message has been sent successfully!");
        }, function(error) {
            console.error("Error sending email:", error);
            alert("Failed to send the message. Please check the console for more details.");
        });
});