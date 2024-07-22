function changeButton(button) {

    button.classList.add("hidden");
    
    button.addEventListener('animationend', function() {
        button.style.display = "none";
    }, { once: true });
}