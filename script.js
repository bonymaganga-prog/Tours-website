function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function showAlert() {
    alert("Thank you for choosing Safari Tours! We will contact you soon.");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}