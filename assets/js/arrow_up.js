let backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  // Scrolled more than 20px
        backToTopButton.style.display = "block";  // Show the button
    } else {
        backToTopButton.style.display = "none";  // Hide the button
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
}

