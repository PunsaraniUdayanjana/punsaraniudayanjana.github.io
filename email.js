// Contact Section
function SendMail(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email_id").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Email validation regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any required field is empty
    if (!firstName || !lastName || !email || !phone || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields before sending the message!',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Got it'
        });
        return; // Stop execution if any field is empty
    }

    // Check email format using regular expression
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid email address!',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Got it'
        });
        return; // Stop execution if email format is invalid
    }

    // Check if both first and last names have valid values
    var fromName = (firstName.trim() && lastName.trim()) ? firstName + " " + lastName : firstName || lastName;

    var params = {
        from_name: fromName,
        email_id: email,
        phone: phone,
        message: message
    };

    emailjs.send("service_o3zow5x", "template_chufrcq", params).then(function (res){
        // Customized styled success alert using SweetAlert2
        Swal.fire({
            title: 'Thank You!',
            text: 'Your message has been successfully sent.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            
        });
    });
}