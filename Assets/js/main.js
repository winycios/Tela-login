var button = document.querySelector('#hidden');
var pass = document.querySelector('#password');

button.addEventListener('click', function (e) {
    button.classList.toggle('slash');

    if (pass.getAttribute("type") == "password") {
        pass.setAttribute("type", "text");
    } else {
        pass.setAttribute("type", "password");
    }
});