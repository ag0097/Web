$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        
        event.preventDefault();
        $("#errorMessages").empty();

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        if (password !== confirmPassword) {
            $("#errorMessages").text("Passwords do not match.");
            return;
        }

        alert("Registration successful!");
    });
});
