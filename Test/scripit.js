$(document).ready(function () {
    const users = [
        {
            username: "admin",
            password: "admin123",
            role: "admin"
        },
        {
            username: "teacher",
            password: "teacher123",
            role: "teacher"
        }
    ];

    // Handle form submission
    $("#loginForm").on("submit", function (event) {
        event.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();
        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (user) {
            if (user.role === "admin") {
                window.location.href = "admin.html";
            } else if (user.role === "teacher") {
                window.location.href = "teacher.html";
            }
        } else {
            $("#error").text("Invalid username or password!");
        }
    });
});